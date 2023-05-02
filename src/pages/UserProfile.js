import React from "react";

function UserProfile() {
  return (
    <div className="bg-white border rounded-5">
      <div className="col-lg-12">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              alt="avatar"
              class="rounded-circle img-fluid w-9"
            />
            <h5 class="my-3">John Wesily</h5>
            <p class="text-muted mb-1">Full Stack Developer</p>
            <p class="text-muted mb-4">Andhra Univesity,Visakapatnam</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary">
                Follow
              </button>
              <button type="button" class="btn btn-outline-primary ms-1 ">
                Message
              </button>
            </div>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-globe fa-lg text-warning"></i>
                <p class="mb-0">Change the link</p>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-github fa-lg"></i>
                <a class="mb-0" href="https://github.com/johnwesily">
                  johnwesily
                </a>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fab fa-linkedin fa-lg"></i>
                <a
                  class="mb-0"
                  href="https://in.linkedin.com/in/john-wesily-vendra-8aa21b245"
                >
                  john wesily vendra
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
