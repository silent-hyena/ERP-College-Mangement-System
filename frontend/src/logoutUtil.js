async function logout() {
  try {
    const res = await fetch("/logout", {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json();
      return data.message || "Logout failed";
    }
    return true;
  } catch (err) {
    return err.message;
  }
}

export default logout;
