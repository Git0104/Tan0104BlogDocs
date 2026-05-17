@echo off
set /p msg="Commit message (Enter for 'update'): "
if "%msg%"=="" set msg=update

echo.
echo === Start Deploying ===
git add .
git commit -m "%msg%"
git push

echo.
echo === Success! Waiting for GitHub Actions... ===
pause