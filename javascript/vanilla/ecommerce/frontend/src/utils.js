export const parseRequestUrl = () => {
  const hash = document.location.hash.slice(1);
  const [address, queryString] = hash.split("?");

  const request = address.toLowerCase().split("/");

  // Basic validation
  if (request.length < 1 || request.length > 4) {
    console.warn("Invalid URL structure.");
    return {};
  }

  const query = queryString ? queryString.split("=") : [];
  return {
    resource: request[1] || null,
    id: request[2] || null,
    verb: request[3] || null,
    name: query[0] || null,
    value: query[1] || null,
  };
};

export const setParseUrl = (request) => {
  // Initialize an empty path string
  let path = "/";

  // Add resource path if it exists
  if (request.resource) {
    path += `${request.resource}`;
  }

  // Add ID path segment if it exists
  if (request.id) {
    path += "/:id";
  }

  // Add verb path segment if it exists
  if (request.verb) {
    path += `/${request.verb}`;
  }

  // Return the constructed path
  return path;
};

export const showLoading = () => {
  document.getElementById("loading-overlay").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading-overlay").classList.remove("active");
};

export const showMessage = (message, callback) => {
  const messageContainer = document.getElementById("message-overlay");

  const messageElement = {
    render: () => {
      return `
        <div>
          <div id="message-overlay-content">${message}</div>
          <button id="message-overlay-close-button">OK</button>
        </div>
      `;
    },
  };

  messageContainer.innerHTML = messageElement.render();

  messageContainer.classList.add("active");

  const closeButton = document.getElementById("message-overlay-close-button");
  closeButton.addEventListener("click", () => {
    messageContainer.classList.remove("active");
    if (callback) callback();
  });
};

export const redirectUser = () => {
  document.location.hash = "/";
};
