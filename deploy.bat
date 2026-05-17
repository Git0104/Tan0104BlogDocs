@echo off
echo === Step 1: Get latest changes from GitHub ===
git pull origin main

echo.
set /p msg="Commit message (Enter for 'update'): "
if "%msg%"=="" set msg=update

echo.
echo === Step 2: Save and Deploy ===
git add .
git commit -m "%msg%"
git push origin main

echo.
echo === All done! Waiting for GitHub Actions... ===
pause