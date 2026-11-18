# Assignment: Team Calculator — GitHub Collaboration

**Course:** Web Development 1 — GitHub for Teams  
**Level:** Beginner–Intermediate  
**Team size:** 1–2 students (**maximum 2 per team**)  
**Suggested work time:** 60–90 minutes, plus any additional time assigned by your instructor  
**Technologies:** HTML, CSS, JavaScript, Git, and GitHub

## 1. Objective

Build a simple, working calculator **and demonstrate a real GitHub team workflow**. Completing the application alone is not enough: you must also show how code moves from a local branch through commits, pushes, a pull request, review, and a merge into `main`.

By the end, you should be able to:

- Work in an existing Git repository and connect it to GitHub.
- Create and switch between feature branches.
- Commit and push your changes.
- Open, review, and merge a pull request (PR).
- Pull the updated `main` branch to your computer.
- Resolve a merge conflict if one occurs (optional challenge).

## 2. Starting files

Your instructor may provide a calculator starter containing:

```text
Calculator_Practice/
├── index.html       # Basic calculator UI
├── calculator.js    # JavaScript starter to complete
└── README.md        # Project notes
```

**Use the starter, not the completed instructor solution.** The basic page already contains two number inputs, an operation selector (`+`, `−`, `×`, `÷`), a Calculate button, and a result area.

Open `index.html` in a browser to see the starting point. Keep `index.html` and `calculator.js` together so the script loads correctly.

## 3. Required application features

### A. Calculator interface — HTML and CSS

1. Keep two clearly labeled number inputs.
2. Provide controls to select **addition, subtraction, multiplication, or division**.
3. Provide a **Calculate** button.
4. Display the answer or an error message clearly on the page.
5. Improve spacing, alignment, typography, and button appearance so the calculator is easy to use.
6. Keep the interface usable on both narrow and wide screens.

### B. Calculator logic — JavaScript

1. Read both input values and the selected operation.
2. Correctly calculate `+`, `−`, `×`, and `÷`.
3. Support negative values and decimal numbers.
4. Show a friendly error for **division by zero**.
5. Show a helpful message if either required input is empty or invalid.
6. Update the existing result area without reloading the page.

**Optional enhancements:** Reset/Clear button, keyboard support (Enter), visible focus styles, improved numeric formatting.

## 4. Working in a team

For a two-person team, divide the work so each student owns a separate feature branch:

| Student   | Branch          | Main responsibility                                    |
| --------- | --------------- | ------------------------------------------------------ |
| Student A | `feature/ui`    | Improve `index.html` layout, labels, and styling       |
| Student B | `feature/logic` | Implement arithmetic and validation in `calculator.js` |

**Both students** must participate in GitHub collaboration. Each student should make meaningful commits and review the other student's PR where possible.

If working **individually**, still use at least one feature branch and a PR. In your README, explain that you completed the work individually; an external teammate review is not required unless your instructor specifically asks for one.

## 5. GitHub workflow — step by step

### Step 1 — Prepare a shared repository

If your instructor provides a **GitHub Classroom repository**, use that repository and its invitation instructions.

Otherwise, one team member can create an **empty GitHub repository** and publish the starter from their existing local project folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial calculator starter"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace the example URL with your own repository URL. **Do not select “Initialize with README”** when creating this empty GitHub repository: the starter already includes a README.

The repository owner should grant the second teammate access. That teammate can then clone the shared repository:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
cd REPOSITORY
```

### Step 2 — Create feature branches

Before starting a new feature, update `main`:

```bash
git switch main
git pull --ff-only origin main
```

Then create the branch assigned to you:

```bash
# Student A
git switch -c feature/ui

# OR Student B
git switch -c feature/logic
```

### Step 3 — Edit, test, commit, and push

Work on your assigned files. Test the page in your browser, then run:

```bash
git status
git add .
git commit -m "Implement calculator UI"  # Change message to match your work
git push -u origin feature/ui          # Student B uses feature/logic
```

**Do not both push directly to `main`.** Use separate feature branches.

### Step 4 — Create and review a pull request

1. On GitHub, open a **Pull Request**.
2. Set **base** to `main` and **compare** to your feature branch.
3. Write a short description of what changed and how you tested it.
4. Ask your teammate to examine the **Files changed** tab.
5. The reviewer should leave meaningful feedback or approval.
6. Address requested changes, then merge the PR when it is ready.

Repeat these steps for the other student's branch. If a later PR reports conflicts, resolve them before merging.

### Step 5 — Update your local `main`

After the PR is merged on GitHub:

```bash
git switch main
git pull --ff-only origin main
```

Optional cleanup **after a branch has been merged**:

```bash
git branch -d feature/ui
```

## 6. Manual testing checklist

Test the final code in a browser before submitting:

| First number | Operation | Second number | Expected result              |
| -----------: | :-------: | ------------: | ---------------------------- |
|            2 |     +     |             3 | `5`                          |
|           10 |     −     |             7 | `3`                          |
|            4 |     ×     |           2.5 | `10`                         |
|            9 |     ÷     |             3 | `3`                          |
|           -4 |     +     |             6 | `2`                          |
|            5 |     ÷     |             0 | Clear division-by-zero error |
|        Empty |     +     |             3 | Input validation message     |

The final UI should show each result without a page reload.

## 7. Submission requirements

Submit the following through the location specified by your instructor:

- **GitHub repository URL** containing the working project on `main`.
- Working `index.html`, `calculator.js`, and `README.md`.
- **Pull request URL(s)** showing feature work, review, and merge history.
- A screenshot of the working calculator.
- A README explaining how to run the page, each team member's contribution, and the features implemented.

Your instructor may use the class GitHub Classroom link instead of a separate submission. Follow the official course instructions where they differ from this handout.

## 8. Suggested grading rubric (100 points)

| Category                                                              |  Points |
| --------------------------------------------------------------------- | ------: |
| Calculator functionality: four operations, decimals, negative numbers |      30 |
| Input validation and division-by-zero handling                        |      15 |
| UI clarity, styling, and responsiveness                               |      15 |
| Feature branches, commits, and pushes                                 |      15 |
| PR descriptions, teammate review, and merging                         |      15 |
| README, testing, and submission completeness                          |      10 |
| **Total**                                                             | **100** |

This rubric is a **suggested classroom rubric**, not a replacement for an official college grading policy.

## 9. Optional challenge: Merge conflict

In a disposable practice branch or repository, have both teammates edit the **same heading** differently. Commit the changes separately, then try to merge them.

Resolve the conflict by choosing a final heading, removing the conflict markers, testing the result, and committing the resolution. **Do not use `git push --force`** to bypass the conflict.

## 10. Final reflection

Be ready to explain:

1. What is the difference between a commit and a push?
2. Why did your team create feature branches instead of editing `main` directly?
3. What is a pull request, and why do we review it before merging?
4. How would you recover if two people changed the same line?

**Remember:** This assignment assesses **collaboration skills as well as the calculator itself**.
