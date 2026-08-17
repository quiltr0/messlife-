@echo off
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  start "" http://127.0.0.1:8000
  py -m http.server 8000
  goto :eof
)
where python >nul 2>&1
if %errorlevel%==0 (
  start "" http://127.0.0.1:8000
  python -m http.server 8000
  goto :eof
)
echo No se encontro Python. Abre README.txt para ver las alternativas.
pause
