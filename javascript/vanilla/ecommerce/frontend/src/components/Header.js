export const Header = {
  render: () => {
    return `
      <div class="brand>
        <button id="aside-open-button>
          &#9776;
        </button>
         <a href="/#/">JOK</a>
      </div>
      <div class="search>
        <form class="search-form" id="search-form>
          <input type="text" name="search" id="search-input" value="${
            "value" || ""
          }"/>
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>  
      <div>
      <a href="/#/signin">Sign-In</a>
      </div>
    `;
  },
};
