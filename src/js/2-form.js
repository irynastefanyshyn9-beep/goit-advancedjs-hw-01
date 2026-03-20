let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    
    formData = parsedData;
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }
};

populateForm();

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const { email, message } = formData;

  if (email === "" || message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted Data:", formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset(); 
});