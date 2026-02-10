document.addEventListener("DOMContentLoaded", () => {

  // ===== ELEMENT REFERENCES =====
  const form = document.getElementById("reservationForm");
  const checkInInput = document.getElementById("checkIn");
  const checkOutInput = document.getElementById("checkOut");
  const roomTypeSelect = document.getElementById("roomType");
  const adultsInput = document.getElementById("adults");
  const childrenInput = document.getElementById("children");
  const successMessage = document.getElementById("successMessage");

  // ===== DATE SETUP =====
  const today = new Date().toISOString().split("T")[0];
  checkInInput.setAttribute("min", today);

  checkInInput.addEventListener("change", () => {
    const checkInDate = new Date(checkInInput.value);
    const minCheckOut = new Date(checkInDate);
    minCheckOut.setDate(minCheckOut.getDate() + 1);

    checkOutInput.setAttribute(
      "min",
      minCheckOut.toISOString().split("T")[0]
    );

    if (checkOutInput.value <= checkInInput.value) {
      checkOutInput.value = "";
    }
  });

  // ===== NUMBER BUTTONS (+ / -) =====
  document.querySelectorAll(".number-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.input);
      const min = parseInt(input.min) || 0;
      const max = parseInt(input.max) || 10;
      let value = parseInt(input.value) || 0;

      if (btn.classList.contains("plus") && value < max) value++;
      if (btn.classList.contains("minus") && value > min) value--;

      input.value = value;
    });
  });

  // ===== FORM SUBMIT =====
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!checkInInput.value || !checkOutInput.value) {
      alert("Please select check-in and check-out dates");
      return;
    }

    if (!roomTypeSelect.value) {
      alert("Please select a room type");
      return;
    }

    if (parseInt(adultsInput.value) < 1) {
      alert("At least one adult is required");
      return;
    }

    const data = {
      checkIn: checkInInput.value,
      checkOut: checkOutInput.value,
      roomType: roomTypeSelect.value,
      adults: parseInt(adultsInput.value),
      children: parseInt(childrenInput.value),
      specialRequests: document.getElementById("specialRequests").value,
    };

    console.log("Sending to backend:", data);

    fetch("https://reservation-system-management-spcl-task-2.onrender.com/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save reservation");
        return res.text();
      })
      .then(() => {
        successMessage.classList.add("show");

        setTimeout(() => {
          form.reset();
          successMessage.classList.remove("show");
          adultsInput.value = 1;
          childrenInput.value = 0;
        }, 4000);
      })
      .catch((err) => {
        console.error("Backend error:", err);
        alert("Reservation failed. Check server.");
      });
  });
});