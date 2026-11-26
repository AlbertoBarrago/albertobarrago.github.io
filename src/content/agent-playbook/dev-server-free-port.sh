# Never test a dev server you did not start: another session or agent may own the port.
PORT=$(node -e "const s=require('net').createServer();s.listen(0,()=>{console.log(s.address().port);s.close()})")
# BROWSER=none: no desktop tab on every start (and never `--open false`: Vite opens /false).
BROWSER=none npm run dev -- --port $PORT --strictPort > dev.log 2>&1 &
PID=$!
until curl -fs -o /dev/null http://localhost:$PORT/; do
  kill -0 $PID 2>/dev/null || { tail -20 dev.log; exit 1; }   # server died: fail, don't wait forever
  sleep 0.5
done

# Before testing, check a marker that proves the server is yours (here, the page title).
curl -fs http://localhost:$PORT/ | grep -q '<title>My App' || { echo "not my server"; exit 1; }

# ... run the checks, then always stop what you started.
kill $PID
