// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-Horizontal");

// Al hacer clic en el botón de hamburguesa
btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú
  // Esto hace que se muestre o se oculte
  menu.classList.toggle("active");
});

// VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["nombres"].value;
  const flastname = form.elements["apellidos"].value;
  const femail = form.elements["email"].value;
  const fphone = form.elements["telefono"].value;
  if (!fname || !flastname || !femail || !fphone) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else {
    const confirmation = confirm(
      "Esta a punto de enviar el formulario, ¿Desea Continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    }

    if (confirmation) {
      // Muestra el mensaje de confirmación de envío
      const mensaje = document.getElementById("mensajeEnviado");
      mensaje.style.display = "block";

      // Opcional: limpiar el formulario
      this.reset();

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        mensaje.style.display = "none";
      }, 9000);
    }
  }
});
//CREAR FUNCION validateEmail(femail)
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}

// VALIDACION DE INICIO DE SESIÓN
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("formularioLogin");
  const usernameInput = loginForm.elements["usuario"];
  const passwordInput = loginForm.elements["password"];
  const loginButton = document.getElementById("btnIniciarSesion");
  const successMessageElement = document.getElementById("mensajeEnviado");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!usernameValue || !passwordValue) {
      alert(
        "Por favor, complete ambos campos: Correo electrónico y Contraseña."
      );
      return;
    }

    if (!validateEmail(usernameValue)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (passwordValue.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    const confirmation = confirm(
      "Está a punto de iniciar sesión, ¿Desea Continuar?"
    );

    if (!confirmation) {
      return;
    }

    alert("¡Inicio de Sesión Exitoso! Bienvenido.");
    if (successMessageElement) {
      successMessageElement.style.display = "block";
    }

    loginForm.reset();

    setTimeout(() => {
      if (successMessageElement) {
        successMessageElement.style.display = "none";
      }
    }, 5000);
  });

  // Función para validar el formato del correo electrónico
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});

// VALIDACION DE FORMULARIO ADMNISTRA TU VIAJE
document.addEventListener("DOMContentLoaded", function () {
  const administraForm = document.getElementById("viajeForm");
  const codeInput = document.getElementById("code");
  const nameInput = document.getElementById("name");
  const lastnameInput = document.getElementById("lastname");

  // Elementos de la sección "Tu Viaje"
  const tuViajeSection = document.getElementById("tu-viaje");
  const nombreCompletoElement = document.getElementById("nombreCompletoViaje");
  const numeroOrdenElement = document.getElementById("numeroOrdenViaje");

  administraForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores de los campos
    const codeValue = codeInput.value.trim();
    const nameValue = nameInput.value.trim();
    const lastnameValue = lastnameInput.value.trim();
    if (!codeValue || !nameValue || !lastnameValue) {
      alert("Por favor, complete todos los campos del formulario");
      return; // Detiene la ejecución si faltan campos
    }

    // Número de Orden en alfanumérico, 6 caracteres, todo en mayúsculas.
    if (!/^[A-Z0-9]{6}$/.test(codeValue)) {
      alert(
        "El número de orden debe ser alfanumérico, tener exactamente 6 caracteres y estar todo en mayúsculas."
      );
      return; // Detiene la ejecución si el formato es incorrecto
    }

    // --- Confirmación del Usuario ---
    const confirmation = confirm(
      "Está a punto de buscar su viaje, ¿Desea Continuar?"
    );

    if (!confirmation) {
      // Si el usuario cancela la confirmación, no hace nada más
      return;
    }

    // --- Si todo es válido y el usuario confirma, procede al despliegue ---
    // 1. Transferir los datos a la sección "Tu Viaje"
    if (nombreCompletoElement) {
      nombreCompletoElement.textContent = `${nameValue} ${lastnameValue}`;
    }
    if (numeroOrdenElement) {
      numeroOrdenElement.textContent = codeValue;
    }

    // 2. Desplegar la sección "Tu Viaje"
    if (tuViajeSection) {
      tuViajeSection.style.display = "block"; // Muestra la sección
      // Opcional: Desplazarse a la nueva sección para que el usuario la vea
      tuViajeSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 3. Limpiar el formulario "Administra tus Viajes" después del éxito
    administraForm.reset();
  });
});
