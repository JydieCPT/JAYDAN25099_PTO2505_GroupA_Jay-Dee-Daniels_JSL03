# 📝 JSL03 - Console-Based Task Manager

## 📌 Overview

This project is a simple **console-based task management system** built in JavaScript. Users can add up to **three new tasks** via prompt dialogs. Each task includes a **title**, **description**, **status**, and a **unique incremental ID**. Users can review all added tasks and filter to view only those marked as `"done"` using the browser console.

---

## 🎯 Features

- ✅ Add up to **three tasks** dynamically using user prompts
- 🆔 Automatically assign a **unique ID** to each task
- 📋 Store all tasks as structured **objects in an array**
- 🔁 Validate task status (`todo`, `doing`, `done`) with input checks
- 🚨 Alert the user when the task limit is reached
- 🧾 View **all added tasks** and **only completed tasks** in the console

---

## 💻 How It Works

1. When the script runs, the user is prompted:
   - To confirm if they want to add a task
   - To enter a task title and description
   - To choose a status from: `todo`, `doing`, or `done`
2. Each task is added to two arrays:
   - `initialTasks` – all tasks including completed ones
   - `newTasks` – only newly added tasks during this session
3. Once 3 tasks are added (or earlier if the user cancels), an alert is shown:


![console log](./explainer-images/console%20log.png)
