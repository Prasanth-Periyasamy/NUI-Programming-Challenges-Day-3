const students = [
  {
    id: 0,
    name: "Arun",
    books: ["Chakra", "War and Peace", "The Shining"],
  },
  {
    id: 1,
    name: "Ashok",
    books: ["Chakra", "War and Peace", "The Shining"],
  },
  {
    id: 2,
    name: "Balu",
    books: ["Wings of Fire", "All about Cricket", "One Piece"],
  },
  {
    id: 3,
    name: "Cathi",
    books: ["Against the wind", "The Shining", "War and Peace", "One Piece"],
  },
];

function findBooks(students) {
  const totalBooks = [];
  students.map((student) => {
    const { books } = student;
    for (let i = 0; i < books.length; i++) {
      if (!totalBooks.includes(books[i])) {
        totalBooks.push(books[i]);
      }
    }
  });
  return totalBooks;
}

function findMixedNames(obj) {
  const members = [];
  const noduplicateMembers = [];
  const mixedNames = [];
  for (let key in obj) {
    if (obj[key].length > 1) {
      members.push(...obj[key]);
    }
  }
  for (let i = 0; i < members.length; i++) {
    if (!noduplicateMembers.includes(members[i])) {
      noduplicateMembers.push(members[i]);
    }
  }
  for (let i = 0; i < noduplicateMembers.length - 1; i++) {
    for (let j = i + 1; j < noduplicateMembers.length; j++) {
      mixedNames.push(
        (noduplicateMembers[i] + noduplicateMembers[j])
          .split("")
          .sort()
          .join("")
      );
    }
  }
  return { mixedNames, noduplicateMembers };
}

function findCommonInterest(students) {
  let obj = {};
  const totalBooks = findBooks(students);
  for (let i = 0; i < students.length; i++) {
    const { books, name } = students[i];
    for (let j = 0; j < totalBooks.length; j++) {
      if (obj[totalBooks[j]] && books.includes(totalBooks[j])) {
        obj[totalBooks[j]].push(name);
      } else if (books.includes(totalBooks[j])) {
        obj[totalBooks[j]] = [name];
      }
    }
  }
  const { mixedNames, noduplicateMembers } = findMixedNames(obj);
  const duplicateRemoval = [];
  for (let key in obj) {
    if (obj[key].length > 1) {
      for (let i = 0; i < obj[key].length - 1; i++) {
        for (let j = i + 1; j < obj[key].length; j++) {
          if (
            mixedNames.includes(
              (obj[key][i] + obj[key][j]).split("").sort().join("")
            )
          ) {
            if (!duplicateRemoval.includes(obj[key][i] + obj[key][j])) {
              duplicateRemoval.push(obj[key][i] + obj[key][j]);
            }
          }
        }
      }
    }
  }
  let counts = {};
  let count = 0;
  let result = [];
  noduplicateMembers.forEach((name) => {
    counts[name] = 0;
  });
  duplicateRemoval.forEach((name) => {
    noduplicateMembers.forEach((subName) => {
      if (name.includes(subName)) {
        counts[subName]++;
      }
    });
  });
  let maxCount = Math.max(...Object.values(counts));
  for (let key in counts) {
    count = counts[key];
    if (count >= maxCount) {
      maxCount = count;
      result.push(key);
    }
  }
  console.log(result);
  return obj;
}
console.log(findCommonInterest(students));
