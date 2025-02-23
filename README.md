 TestCafe Automation Portfolio - E-commerce 🛍️
🚀 This is a TestCafe automation project for testing an e-commerce website.
It includes test scripts for user registration, cart functionality, and checkout flows.

📥 Clone the Repository
To get started, clone this repository to your local machine:
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>
📦 Install Dependencies
Make sure you have Node.js (v20 or later) installed.
Then, install the required dependencies:
```
npm install
```

▶️ Run Tests Using TestCafe
✅ 1️⃣ Run Tests in Chrome
```
npm run testcafe
```

✅ 2️⃣ Run Tests in Chrome Headless (CI Mode)
```
npm run testcafe:headless
```

🛠 Available NPM Scripts
You can find the scripts inside package.json under "scripts":
```
{
 "scripts": {
    "test": "npx testcafe 'chrome:headless --disable-features=AutofillServerCommunication --disable-save-password-bubble --disable-password-generation --disable-popup-blocking --disable-native-automation --skip-js-errors' --video videos/ --video-options singleFile=true,failedOnly=true,pathPattern=test-run.mp4 --reporter html:report.html test/"
  }
}
```

📌 Running in GitHub Actions (CI/CD)
To execute the tests in a CI/CD pipeline (GitHub Actions), make sure your workflow includes:

yaml
```
      - name: Run TestCafe Tests
        run: npm run testcafe:headless
```

🐞 Debugging Issues
If you run into problems, try:
1️⃣ Run tests in debug mode:
```
testcafe chrome tests/ --debug-mode
```

2️⃣ Check TestCafe logs for errors.
