# Project Setup Guide

## Setting up Git Repository

```bash
mkdir project
cd project
git init --bare
```
- Creates a new directory named 'project'.
- Changes the current directory to 'project'.
- Initializes a new bare Git repository.

## Cloning and Committing Changes

```bash
cd ..
git clone project dev1
cd dev1
touch index.html
git add .
git commit -m "first by dev1"
git push
```
- Moves back one directory.
- Clones the 'project' repository into a directory named 'dev1'.
- Changes the current directory to 'dev1'.
- Creates a new file named 'index.html'.
- Adds all changes to the staging area.
- Commits the changes with the message "first by dev1".
- Pushes the changes to the remote repository.

```bash
cd ..
git clone project dev2
cd dev2
touch app.js
git add .
git commit -m "second by dev2"
git push
```
- Moves back one directory.
- Clones the 'project' repository into a directory named 'dev2'.
- Changes the current directory to 'dev2'.
- Creates a new file named 'app.js'.
- Adds all changes to the staging area.
- Commits the changes with the message "second by dev2".
- Pushes the changes to the remote repository.

## Day 3 Setup

```bash
npm i -g http-server
```
- Installs the `http-server` package globally.

```bash
npx http-server .
```
- Starts a local server to serve files from the current directory.

```bash
npm remove http-server
```
- Removes the globally installed `http-server` package.

```bash
npm i ject -D
```
- Installs the `ject` package as a development dependency.

## React Project Setup

```bash
npm create vite todo-react
```
- Initializes a new Vite project named 'todo-react'.

```bash
cd todo-react
npm i
```
- Changes the current directory to 'todo-react'.
- Installs dependencies for the project.

```bash
npm run dev
```
- Starts the development server.

## MongoDB Usage

```bash
mongo
```
- Starts the MongoDB shell.

```bash
show dbs
```
- Lists all databases.

```bash
use todo
```
- Creates or switches to the 'todo' database.

```bash
db.tasks.insertOne({ name: 'Something to do', done: false })
```
- Inserts a new task into the 'tasks' collection.

```bash
db.tasks.find()
```
- Retrieves all tasks from the 'tasks' collection.

```bash
db.tasks.updateOne({ _id: ObjectId('6651a96f411ff16a5acdcdf6') }, { $set: { done: true } })
```
- Updates the status of a task to 'done'.

```bash
db.tasks.deleteOne({ _id: ObjectId('6651aac9411ff16a5acdcdf8') })
```
- Deletes a task from the 'tasks' collection.

## MongoDB Projects Setup

```bash
npm i mongodb express body-parser
```
- Installs MongoDB, Express, and Body-parser packages.

```bash
npm i nodemon
```
- Installs Nodemon for auto-restarting the server.

```bash
npx nodemon index.js
```
- Starts the server with Nodemon for automatic restarting.

```bash
npm i cors
```
- Installs the CORS package for enabling Cross-Origin Resource Sharing.

## React Router Projects Setup

```bash
npm i react-router-dom
```

## Expo Native

- Expo Go App
- Android Studio + Emulator

```bash
npx create-expo-app todo-native
```

```bash
npx expo
```

- To show QR code for run in your phone.

=======

> [!NOTE]
> This README.md file provides a comprehensive guide for setting up a project, including Git repository setup, cloning, committing changes, setting up development environment for day 3 tasks, React project setup, MongoDB usage, and MongoDB project setup. Each command is explained for better understanding and usage.
