# GitHub Instructions - English and Русский

## 1. Configure Git in PowerShell | Настройте Git в PowerShell

First, ensure Git is properly configured with your GitHub credentials:  
Сначала убедитесь, что Git правильно настроен с вашими учетными данными GitHub:

```
git config --global user.name "Your Name"
git config --global user.name "Ваше Имя"
git config --global user.email "your.email@example.com"
git config --global user.email "your.email@example.com"
```

## 2. Create a Repository on GitHub | Создайте репозиторий на GitHub

Go to your GitHub account and create a new repository by clicking the New button.
Перейдите в свою учетную запись GitHub и создайте новый репозиторий, нажав кнопку "Новый".

## 3. Clone the Repository Locally | Клонируйте репозиторий локально

In PowerShell, navigate to the directory where you want to store your project and clone the repository:
В PowerShell перейдите в каталог, где вы хотите сохранить свой проект, и клонируйте репозиторий:

```
git clone https://github.com/your-username/my-repo.git
```

## 4. Start Your Project | Начните свой проект

Navigate to your cloned repository folder:
Перейдите в папку вашего клонированного репозитория:

```
cd my-repo(directory)
```

## 5. Add Files to GitHub | Добавьте файлы в GitHub

After creating or adding local files to your repository, stage the changes using:
После создания или добавления локальных файлов в репозиторий, подготовьте изменения с помощью:

```
git add .

```

## 6. Commit the Changes | Зафиксируйте изменения

Once the files are staged, commit them with a meaningful message:
После того, как файлы подготовлены, зафиксируйте их с помощью осмысленного сообщения:

```
git commit -m "Initial commit message/ Начальное сообщение фиксации"

git commit -m "TEXT"
```

## 7. Push Changes to GitHub | Отправьте изменения в GitHub

To push your committed changes to GitHub (main branch by default):
Чтобы отправить ваши зафиксированные изменения в GitHub (по умолчанию в главную ветку):

```
git push origin main
```

## 8. Check Git Status | Проверьте статус Git

To see the current state of your repository:
Чтобы увидеть текущее состояние вашего репозитория:

```
git status

```

## 9. Fetch and Pull from GitHub | Получите и вытяните изменения из GitHub

To fetch the latest changes from the remote repository:
Чтобы получить последние изменения из удаленного репозитория:

```
git fetch

```

To pull the latest changes into your local branch:
Чтобы вытянуть последние изменения в вашу локальную ветку:

```
git pull origin main
```

## 10. Create a New Branch | Создайте новую ветку

If you need to work on a new feature or fix:
Если вам нужно поработать над новой функцией или исправлением:

```
git checkout -b feature-branch
```

## 11. Merge a Branch | Слияние ветки

Once your work is complete, merge the feature branch back into the main branch:
Когда ваша работа завершена, объедините ветку с основной веткой:

```
git checkout main
git merge feature-branch
```

## 12. Push the Merged Branch to GitHub | Отправьте объединенную ветку в GitHub

To reflect the merge on GitHub:
Чтобы отразить слияние в GitHub:

```
git push origin main
```

## 13. Delete the Feature Branch (Optional) | Удаление ветки (необязательно)

After merging, you can delete the feature branch locally:
После слияния вы можете удалить ветку локально:

```
git branch -d feature-branch
```

If the branch is pushed to GitHub and you want to remove it from the remote as well:
Если ветка была отправлена в GitHub и вы хотите удалить ее удаленно:

```
git push origin --delete feature-branch
```
