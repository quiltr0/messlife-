#!/bin/sh
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  (sleep 1; open "http://127.0.0.1:8000" 2>/dev/null || xdg-open "http://127.0.0.1:8000" 2>/dev/null) &
  python3 -m http.server 8000
elif command -v python >/dev/null 2>&1; then
  (sleep 1; open "http://127.0.0.1:8000" 2>/dev/null || xdg-open "http://127.0.0.1:8000" 2>/dev/null) &
  python -m http.server 8000
else
  echo "No se encontro Python. Revisa README.txt."
  exit 1
fi
