const popUpWindowModal = (props) => `<div class="overlay" id="overlay">
  <div class="modalWindow">
    <div class="modalWindowChildWrapper wrapper-1">
        <div class="project">
          <h1 class="project-modal-title">${props.title}</h1>
          <img src="./assets/IconCancel.svg" alt="" class="pIcon project--close_icon" />
        </div>
        <ul class="technology-list">
          ${props.tags.map((eachSkill) => `<li class="skills">${eachSkill}</li>`).join('')}
        </ul>
      </div>
      <div class="modalWindowChildWrapper wrapper-2">
        <img src=${props.image} alt="" class="pIcon modalWind elseowChildWrapper--Img">
        <div class="modalWindow_sub--child">
          ${window.innerWidth < 768 ? `<p class="modalWindow_sub--child--desc">${props.full_desc.split(' ').slice(0, 60).join(' ')}</p>` : `<p class="modalWindow_sub--child--desc">${props.full_desc}</p>`}
          <ul class="modalWindow_sub--child--btn_wrapper">
            <li class="btn_wrapper--list">
              <a href=${props.live_url} target="_blank" rel="noopener noreferrer" class="btn_wrapper--modal-btn">See Live <img src="./assets/IconExport.svg" alt="" /></a>
            </li>
            <li class="btn_wrapper--list">
              <a href=${props.source_url}  target="_blank" rel="noopener noreferrer" class="btn_wrapper--modal-btn">See Project <img src="./assets/IconGitHub.svg" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;

export default popUpWindowModal;