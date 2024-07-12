# سوالات 
## 1.
پوشه‌ی `.git` یک دایرکتوری پنهان است که توسط سیستم کنترل نسخه گیت (Git) در ریشه‌ی یک مخزن (repository) ایجاد می‌شود. این پوشه شامل تمامی اطلاعات و داده‌های مرتبط با مخزن، از جمله تاریخچه‌ی تغییرات، تنظیمات مخزن، شاخه‌ها (branches)، برچسب‌ها (tags)، و اطلاعات مربوط به وضعیت فعلی مخزن است. به طور خاص، در این پوشه اطلاعاتی مانند اشیاء (objects)، مراجعات (references)، و فایل‌های پیکربندی ذخیره می‌شود.

برای ایجاد پوشه‌ی `.git` و شروع یک مخزن جدید گیت، از دستور `git init` استفاده می‌شود. اجرای این دستور در دایرکتوری مورد نظر، پوشه‌ی `.git` را ایجاد کرده و آن دایرکتوری را به یک مخزن گیت تبدیل می‌کند.

## 2.
منظور از اتمیک بودن (atomic) در "atomic commit" و "atomic pull-request" این است که این عملیات‌ها به صورت یکپارچه و غیر قابل تقسیم انجام می‌شوند. در **atomic commit**، تمامی تغییرات مرتبط با یک ویژگی یا رفع باگ خاص در یک کامیت واحد ثبت می‌شوند، به طوری که یا تمام تغییرات انجام می‌شود یا هیچ‌کدام اعمال نمی‌شود. این رویکرد باعث می‌شود که تاریخچه تغییرات سیستم تمیز و قابل مدیریت باقی بماند و در صورت بروز مشکل، امکان بازگرداندن تمام تغییرات آن کامیت به سادگی فراهم باشد.

در **atomic pull-request**، یک pull request شامل تمامی تغییرات لازم برای تکمیل یک ویژگی یا اصلاح یک باگ است و این تغییرات به صورت یکجا بررسی و ادغام می‌شوند. این روش کمک می‌کند تا کد به صورت پایدار و بدون نقص به شاخه اصلی اضافه شود و ریسک تعارضات یا عواقب ناخواسته کاهش یابد. به این ترتیب، تغییرات به صورت مستقل و خودکفا انجام می‌شوند، که این امر همکاری تیمی را تسهیل و مدیریت کد را بهبود می‌بخشد.

## 3.



1. **Fetch**:
   - دستور `git fetch` اطلاعات و تغییرات از یک مخزن راه دور (remote repository) را دریافت می‌کند، اما آن‌ها را به شاخه (branch) محلی شما ادغام نمی‌کند. به عبارت دیگر، این دستور آخرین وضعیت مخزن راه دور را به‌روزرسانی می‌کند بدون اینکه تغییرات را در شاخه فعلی اعمال کند. این دستور برای بررسی وضعیت آخرین تغییرات راه دور بدون ادغام آن‌ها مفید است.
   ```bash
   git fetch
   ```

2. **Pull**:
   - دستور `git pull` در واقع ترکیبی از `git fetch` و `git merge` است. این دستور ابتدا تغییرات را از مخزن راه دور دریافت می‌کند (fetch) و سپس آن‌ها را با شاخه محلی ادغام می‌کند (merge). این دستور زمانی استفاده می‌شود که بخواهید مخزن محلی خود را با آخرین تغییرات مخزن راه دور به‌روزرسانی کنید.
   ```bash
   git pull
   ```

3. **Merge**:
   - دستور `git merge` دو شاخه را با هم ادغام می‌کند. این دستور تغییرات دو شاخه را با هم ترکیب می‌کند و یک کامیت جدید برای نتیجه‌ی ادغام ایجاد می‌کند. این روش برای اضافه کردن تغییرات یک شاخه به شاخه‌ی دیگر بدون بازنویسی تاریخچه مناسب است.
   ```bash
   git merge branch_name
   ```

4. **Rebase**:
   - دستور `git rebase` شاخه فعلی را روی شاخه‌ی هدف "بازنویسی" می‌کند. این دستور کامیت‌های شاخه فعلی را می‌گیرد و آن‌ها را بر اساس شاخه هدف مجدداً اعمال می‌کند. نتیجه‌ی rebase یک تاریخچه‌ی خطی‌تر و مرتب‌تر است، اما باید با دقت استفاده شود تا از تداخلات و مشکلات احتمالی جلوگیری شود.
   ```bash
   git rebase branch_name
   ```

5. **Cherry-pick**:
   - دستور `git cherry-pick` یک کامیت مشخص از یک شاخه را می‌گیرد و آن را به شاخه فعلی اعمال می‌کند. این دستور برای انتخاب و اعمال تغییرات خاص از تاریخچه‌ی شاخه‌های دیگر بدون ادغام تمام تغییرات آن‌ها مفید است.
   ```bash
   git cherry-pick commit_hash
   ```

به طور خلاصه، `fetch` فقط تغییرات راه دور را دریافت می‌کند، `pull` این تغییرات را ادغام می‌کند، `merge` دو شاخه را ترکیب می‌کند، `rebase` تاریخچه شاخه را بازنویسی می‌کند و `cherry-pick` کامیت‌های خاصی را از شاخه‌های دیگر اعمال می‌کند.


## 4.
در گیت (Git)، دستورات `reset`، `revert`, `restore`، `checkout` و `switch` هر کدام کاربردهای خاص خود را دارند.

1. **Reset**:
   - دستور `git reset` اشاره‌گر HEAD و شاخه فعلی را به یک کامیت مشخص منتقل می‌کند، به این ترتیب وضعیت مخزن را به آن کامیت برمی‌گرداند. این دستور می‌تواند برای لغو تغییرات، از مرحله خارج کردن فایل‌ها یا انتقال HEAD به نقطه‌ای دیگر در تاریخچه استفاده شود.
   ```bash
   git reset [--soft | --mixed | --hard] [commit]
   ```

2. **Revert**:
   - دستور `git revert` یک کامیت جدید ایجاد می‌کند که تغییرات یک کامیت مشخص را معکوس می‌کند. این دستور تغییرات یک کامیت خاص را لغو می‌کند بدون اینکه تاریخچه اصلی را تغییر دهد، و به این ترتیب یک "کامیت معکوس" به تاریخچه اضافه می‌کند.
   ```bash
   git revert [commit]
   ```

3. **Restore**:
   - دستور `git restore` تغییرات در دایرکتوری کاری و/یا منطقه مرحله‌بندی را به حالت یک کامیت، شاخه یا فایل مشخص بازمی‌گرداند. این دستور می‌تواند برای لغو تغییرات، بازگرداندن فایل‌ها به حالت خاص یا برگرداندن تغییرات استفاده شود.
   ```bash
   git restore [--source=commit] [--staged] [file]
   ```

4. **Checkout**:
   - دستور `git checkout` می‌تواند برای تغییر بین شاخه‌ها، ایجاد یک شاخه جدید یا بازگرداندن فایل‌ها در دایرکتوری کاری به حالت یک کامیت یا شاخه مشخص استفاده شود. این یک دستور چندمنظوره است که با توجه به آرگومان‌های ارائه شده، کاربردهای مختلفی دارد.
   ```bash
   git checkout [branch | commit | file]
   ```

5. **Switch**:
   - دستور `git switch` برای تغییر بین شاخه‌ها یا بازگرداندن دایرکتوری کاری به حالت یک شاخه یا کامیت مشخص استفاده می‌شود. این دستور ترکیبی از عملکرد `git checkout` و `git restore` است.
   ```bash
   git switch [branch]
   ```

به طور خلاصه، `reset` برای تغییر تاریخچه و شاخه، `revert` برای ایجاد کامیت معکوس، `restore` برای بازگرداندن فایل‌ها، `checkout` برای تغییر شاخه و حالت فایل‌ها و `switch` برای تغییر شاخه و بازگرداندن دایرکتوری کاری استفاده می‌شوند.

## 5.
### Stage/Index در Git

در Git، "stage" یا "index" به منطقه‌ای اشاره دارد که تغییرات قبل از commit کردن به مخزن آماده می‌شوند. وقتی شما تغییراتی را در فایل‌های دایرکتوری کاری خود انجام می‌دهید، Git به شما اجازه می‌دهد که این تغییرات را به صورت انتخابی به منطقه stage اضافه کنید (`git add`). این منطقه stage به شما امکان می‌دهد که قبل از commit کردن، تغییرات را مرور و سازماندهی کنید و کنترل دقیق‌تری بر روی آن داشته باشید که چه چیزی در هر commit وارد شود.

### دستور stash در Git

دستور `git stash` برای ذخیره موقت تغییرات در یک "stash" به کار می‌رود تا شما بتوانید بدون commit کردن تغییرات ناتمام به مخزن، روی کار دیگری کار کنید. این ویژگی مخصوصاً زمانی کاربرد دارد که شما در حال توسعه یک ویژگی یا اصلاح یک باگ هستید و نیاز دارید به یک کار دیگر یا شاخه دیگر سوییچ کنید. با استفاده از `git stash`، تغییرات موقتاً در stash ذخیره می‌شوند و شما می‌توانید بعداً با `git stash pop` یا `git stash apply` آن تغییرات را بازگردانید تا به کار خود ادامه دهید.

مهم است به یاد داشته باشید که تغییرات موجود در stash فقط در مخزن شما ذخیره می‌شوند و با همکاران دیگر به اشتراک گذاشته نمی‌شوند، به عکس commit که جزء تاریخچه مشترک است.

## 6.


### Snapshot در Git

در Git، مفهوم "snapshot" به معنای گرفتن یک فریم (تصویر) مشخص از وضعیت فایل‌ها و دایرکتوری‌ها در یک زمان خاص است. این فریم به طور کامل وضعیت فعلی فایل‌های شما را شامل می‌شود و اطلاعات مربوط به آن‌ها مانند محتویات فایل‌ها، ساختار پوشه‌ها، وضعیت مرحله stage و تاریخچه تغییرات (commit history) را در آن زمان مشخص می‌کند.

### Commit در Git

Commit در Git نیز به معنای ثبت یک snapshot از وضعیت کنونی فایل‌ها و دایرکتوری‌ها است. هر commit یک snapshot از تمام تغییراتی که شما در فایل‌ها انجام داده‌اید را در یک زمان خاص ثبت می‌کند. به این ترتیب، هر commit به صورت یک snapshot از وضعیت فعلی مخزن شما به طول زمان برای مراجعه و بازگرداندن به آن نقطه در تاریخ تبدیل می‌شود.

ارتباط اصلی بین snapshot و commit در Git این است که هر commit وضعیت کنونی فایل‌ها و دایرکتوری‌های شما را در یک زمان خاص به عنوان یک snapshot ثبت می‌کند. این snapshot ها به شما امکان می‌دهند که به راحتی به وضعیت‌های قبلی مخزن خود بازگردید و تغییراتی که در طول زمان ایجاد کرده‌اید را مدیریت کنید و مرور کنید.

## 7. 
 ### تفاوت‌های Local Repository و Remote Repository در Git

**Local Repository (مخزن محلی):**
مخزن محلی در Git بر روی کامپیوتر شخصی یا سرور محلی قرار دارد که توسط توسعه‌دهنده کنترل می‌شود. این مخزن به عنوان محیط اصلی برای ایجاد، ویرایش و ثبت تغییرات در پروژه‌ها استفاده می‌شود. در مخزن محلی، تغییرات می‌توانند به صورت محلی اعمال شوند و این امکان را فراهم می‌کند تا توسعه‌دهندگان قبل از اشتراک‌گذاری تغییرات، آن‌ها را تست و ارزیابی کنند. این مخزن به سادگی از طریق مسیر محلی مانند `/home/user/project` در لینوکس یا `C:\Users\User\Project` در ویندوز قابل دسترسی است.

**Remote Repository (مخزن از راه دور):**
مخزن از راه دور در Git بر روی یک سرور مرکزی یا پلتفرمی مانند GitHub، GitLab یا Bitbucket میزبانی می‌شود و توسط چندین توسعه‌دهنده به اشتراک گذاشته می‌شود. این مخزن به عنوان یک مرکز مشترک برای همکاری، مدیریت و به اشتراک گذاری کد بین اعضای تیم عمل می‌کند. با قراردادن کدها و تغییرات در مخزن از راه دور، توسعه‌دهندگان می‌توانند تغییرات را با هم هماهنگ کنند، نسخه‌های پشتیبان را نگهداری کنند و از امکان بازگرداندن تاریخچه کامل پروژه بهره‌مند شوند.

این دو نوع مخازن به توسعه‌دهندگان امکان می‌دهند که کدهایشان را به صورت موثر و هماهنگ مدیریت کنند و از امنیت بالاتری برخوردار باشند. به طور کلی، مخزن محلی برای توسعه و آزمایش تغییرات فردی و مخزن از راه دور برای همکاری و مدیریت مشترک پروژه‌ها بین چندین توسعه‌دهنده استفاده می‌شود.








# Software Engineering Lab AZ-1

Welcome to the Software Engineering Lab AZ-1 project. This project is designed to help you get started with the basics of software engineering practices, including setting up a development environment, working with Git and GitHub, and deploying a React application using GitHub Pages.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- You have a [GitHub](https://github.com/) account.
- You have installed [Git](https://git-scm.com/).

### Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Lover1975/Software-Engineering-Lab-AZ-1.git
    ```
   
2. **Navigate to the project directory**:
    ```sh
    cd Software-Engineering-Lab-AZ-1/my-app
    ```

3. **Install the dependencies**:
    ```sh
    npm install
    ```

### Running the Project

To run the project locally:

1. **Start the development server**:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application running.

### Deployment

The project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment is handled by a GitHub Actions workflow.

To manually trigger a deployment:

1. Make sure all changes are committed and pushed to the `main` branch.

2. The GitHub Actions workflow will automatically build and deploy the project to GitHub Pages. You can check the status of the workflow in the "Actions" tab of your repository.

### Contributing

To contribute to this project, follow these steps:

1. **Fork the repository**.

2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them**:
    ```sh
    git commit -m "Add feature"
    ```

4. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```

5. **Create a pull request**.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
