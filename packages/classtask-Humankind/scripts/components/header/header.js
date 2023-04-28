/* eslint-disable import/prefer-default-export */
const headingsCommon = [
  {
    title: "Shop all",
  },
  {
    title: "Save on Sets",
  },
];

const headingsAdmin = [
  {
    title: "Ban",
  },
  {
    title: "See all products",
  },
];

function renderCommonNavItems() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.classList.add("nav-list");

  headingsCommon.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = item.title;

    ul.append(li);
  });

  nav.append(ul);

  return nav;
}

function renderAdminNavItems() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  ul.classList.add("nav-list");

  headingsAdmin.forEach((item) => {
    const li = document.createElement("li");

    li.innerHTML = item.title;

    ul.append(li);
  });

  nav.append(ul);

  return nav;
}

// role = 'GUEST' | 'ADMIN';
export function renderHeader(role = "GUEST") {
  const header = document.querySelector("header");

  const commonNav = renderCommonNavItems();

  header.append(commonNav);

  if (role === "ADMIN") {
    const adminNav = renderAdminNavItems();

    header.append(adminNav);
  }
}
