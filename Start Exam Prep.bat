@echo off
setlocal
title CPUT Exam Prep
cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js and npm are required to run this site.
  echo Install them from https://nodejs.org and try again.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo First run: installing dependencies. This takes a minute...
  call npm install
  if errorlevel 1 (
    echo.
    echo Installation failed. Check your internet connection and try again.
    pause
    exit /b 1
  )
)

echo.
echo Starting the site. Your browser should open automatically.
echo Keep this window open while you study. Press Ctrl+C to stop.
echo.
call npm run dev -- --open
pause
