// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".

  const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

  if (opsamlingPlaceholder) {
    // Hent oplysninger fra formularen
    const params = new URLSearchParams(window.location.search);

    const name = params.get("name") || "Gæst";
    const email = params.get("email") || "Ikke angivet";
    const phone = params.get("phone") || "Ikke angivet";
    const participants = params.get("participants") || "";
    const interest = params.get("interest") || "";

    // Vis personlige oplysninger
    document.querySelector("#guestName").textContent = name;

    document.querySelector("#fullName").textContent = name;

    document.querySelector("#email").textContent = email;

    document.querySelector("#phone").textContent = phone;

    // Vis antal deltagere
    const participantsElement = document.querySelector("#participants");

    if (participants === "1") {
      participantsElement.textContent = "1 person";
    } else if (participants) {
      participantsElement.textContent = participants + " personer";
    } else {
      participantsElement.textContent = "Ikke angivet";
    }

    // Variationer efter interesse
    const experience = document.querySelector("#experience");

    const personalMessage = document.querySelector("#personalMessage");

    if (interest === "brudekjoler") {
      experience.textContent = "Brudekjoler";

      personalMessage.textContent =
        "Glæd dig til at opleve smukke brudekjoler fra forskellige kulturer.";
    } else if (interest === "kultur") {
      experience.textContent = "Kultur og traditioner";

      personalMessage.textContent =
        "Oplev unikke bryllupstraditioner fra hele verden.";
    } else if (interest === "smykker") {
      experience.textContent = "Smykker";

      personalMessage.textContent =
        "Udforsk smukke smykker inspireret af forskellige kulturer.";
    } else {
      experience.textContent = "Bryllupsinspiration";

      personalMessage.textContent =
        "Glæd dig til en dag fyldt med kærlighed, kultur og inspiration.";
    }
  }
}
