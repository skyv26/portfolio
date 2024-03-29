import projectList from './portfolio/modules/project_works.js';
import popUpWindowModal from './portfolio/components/popUpWindowModal.js';

const header = document.querySelector('.main-header');
const workSection = document.querySelector('.work-section_container');
const form = document.querySelector('.form');

const ConvertStringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

const windowResizerChecker = () => {
  if (window.innerWidth >= 768) {
    if (header.classList.length > 1) {
      header.classList.remove('mobile-menu--active');
    }
  }
};

header.addEventListener('click', function mobileMenu(e) {
  const nodeElemet = e.target;
  const nodeElementParent = nodeElemet.parentNode.className;
  if (
    nodeElemet.className.includes('btn--icon')
    || nodeElemet.className.includes('bar')
    || nodeElementParent.includes('btn--icon')
  ) {
    this.classList.toggle('mobile-menu--active');
  } else if (
    nodeElemet.className.includes('menu__item')
    || nodeElemet.className.includes('menu__item--link')
  ) {
    this.classList.remove('mobile-menu--active');
  }
});

window.addEventListener('resize', windowResizerChecker);

/* ----------------------------------- Window Model PopUp --------------------------------------- */

const workSectionContainer = document.querySelector('.work-section_container');

const popUpHandler = (obj) => {
  document.body.prepend(...ConvertStringToHTML(popUpWindowModal(obj)).children);
};

const featuredProjectHtml = `<div class="work-section_container--highlighted_project">
  <img
    src=${projectList.featuredProject.image}
    alt="feature project"
    class="image"
  />
  <div class="highlighted_project--wrapper">
    <h3 class="project-title">${projectList.featuredProject.title}</h3>
    <p class="project-desc">${projectList.featuredProject.short_desc}
    </p>
    <ul class="technology-list">
    ${projectList.featuredProject.tags
    .map((tagName) => `<li class="skills">${tagName}</li>`)
    .join('')}
    </ul>
    <a role="button" class="project_list--li__cta featuredProject"
      >See Project</a
    >
  </div>
</div>`;

const projectUnorderedList = document.createElement('ul');
projectUnorderedList.className = 'work-section_container--project_list';

const projectWorkList = projectList.projectGrid.map(
  (li) => `<li tabindex="0" class="project_list--li">
  <img
    src=${li.image}
    alt="feature project"
    class="image"
  />
  <div class="project-detail">
    <h3 class="project-title">${li.title}</h3>
    <p class="project-desc">
      ${li.short_desc}
    </p>
    <ul class="technology-list">
    ${li.tags.map((tagName) => `<li class="skills">${tagName}</li>`).join('')}
    </ul>
  </div>
  <a role="button" class="project_list--li__cta proj_id-${
  li.id
}">See Project</a>
</li>`,
);

workSectionContainer.appendChild(
  ...ConvertStringToHTML(featuredProjectHtml).children,
);

projectWorkList.forEach((eachList) => {
  projectUnorderedList.appendChild(...ConvertStringToHTML(eachList).children);
});
workSectionContainer.appendChild(projectUnorderedList);

/* Window PopUp */

workSection.addEventListener('click', (e) => {
  const getElement = e.target;
  if (
    getElement.nodeName.toLowerCase() === 'a'
    && getElement.getAttribute('role') === 'button'
  ) {
    if (getElement.classList[1].includes('proj_id')) {
      popUpHandler(
        projectList.projectGrid[
          Number(getElement.classList[1].split('-')[1]) - 1
        ],
      );
    } else {
      popUpHandler(projectList[getElement.classList[1]]);
    }
  }
});

document.body.addEventListener('click', (e) => {
  const overlayModal = document.getElementById('overlay');
  if (e.target.nodeName.toLowerCase() === 'img') {
    if (e.target.className.includes('project--close_icon')) {
      overlayModal.remove();
    }
  }
});

// Forma data localStorage logic
const getLocalStorageData = localStorage.getItem('formData');

if (getLocalStorageData !== null) {
  document.querySelector('input[type="text"]').value = JSON.parse(getLocalStorageData).name;
  document.querySelector('input[type="email"]').value = JSON.parse(getLocalStorageData).email;
  document.querySelector('textarea.inputs').value = JSON.parse(getLocalStorageData).message;
}

const obj = JSON.parse(getLocalStorageData);
const contactFormObject = {
  name: obj ? obj.name : '',
  email: obj ? obj.email : '',
  message: obj ? obj.message : '',
};

form.addEventListener('input', (e) => {
  const targetElement = e.target;

  if (targetElement.getAttribute('type') === 'text') {
    contactFormObject.name = targetElement.value;
  } else if (targetElement.getAttribute('type') === 'email') {
    contactFormObject.email = targetElement.value;
  } else {
    contactFormObject.message = e.target.value;
  }

  localStorage.setItem('formData', JSON.stringify(contactFormObject));
});

// Form validation logic
const msg = document.createElement('p');
msg.className = 'form-error--msg';

form.addEventListener('submit', function formSubmitHandler(e) {
  const email = this.querySelector('input[type="email"]').value;

  this.appendChild(msg);
  const condition = email.length > 0 ? email.toLowerCase() === email : false;
  if (!condition) {
    e.preventDefault();
    msg.textContent = '** email letters should be in lowercase';
    msg.classList.add('active');
  }
});
