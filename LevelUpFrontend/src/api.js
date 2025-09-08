const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5250/api";

export async function signup(userData) {
  const res = await fetch(`${API_BASE}/Auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Signup failed: ${errorText}`);
  }
  return res.json();
}

export async function login(credentials) {
  const res = await fetch(`${API_BASE}/Auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Login failed: ${errorText}`);
  }

  // ✅ try parsing JSON, fallback to text
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    return { message: await res.text() }; // wrap plain text
  }
}
