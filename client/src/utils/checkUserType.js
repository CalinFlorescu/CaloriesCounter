export function isUser() {
  const role = sessionStorage.getItem("role");

  return role === "2";
}

export function isUserAdmin() {
  const role = sessionStorage.getItem("role");

  return role === "1";
}

export function isAdmin() {
  const role = sessionStorage.getItem("role");

  return role === "0";
}
