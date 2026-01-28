

// document.addEventListener("DOMContentLoaded", () => {
//     let user = localStorage.getItem("cinimaticsUser");
//     let signinBtn = document.getElementById("signinBtn");

//     if (user && signinBtn) {
//         signinBtn.innerText = user;
//         signinBtn.href = "#"; 
//     }
// });
// const searchInput = document.getElementById('movieSearch');

// searchInput.addEventListener('keyup', (e) => {
//     const term = e.target.value.toLowerCase();
//     const movies = document.querySelectorAll('.movie-card');
    
//     movies.forEach(movie => {
//         const title = movie.querySelector('h4').innerText.toLowerCase();
//         if (title.includes(term)) {
//             movie.style.display = "block";
//         } else {
//             movie.style.display = "none";
//         }
//     });
// });

// document.querySelectorAll(".movie-card").forEach(card => {
//     card.addEventListener("click", () => {
//         document.querySelectorAll(".movie-card").forEach(c => c.classList.remove("active"));
//         card.classList.add("active");
//         document.body.classList.add("popup-active");
//     });
// });

// document.addEventListener("click", (e) => {
//     if (!e.target.closest(".movie-card")) {
//         document.querySelectorAll(".movie-card").forEach(c => c.classList.remove("active"));
//         document.body.classList.remove("popup-active");
//     }
// });
// signinBtn.addEventListener("click", () => {
//     if(confirm("Logout?")) {
//         localStorage.removeItem("cinimaticsUser");
//         location.reload();
//     }
// });










// document.querySelectorAll(".bookShow").forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.getElementById("bookingPopup").style.display = "flex";
//     });
// });

// document.getElementById("closePopup").addEventListener("click", () => {
//     document.getElementById("bookingPopup").style.display = "none";
// });

// document.getElementById("reserveBtn").addEventListener("click", () => {
//     let date = document.getElementById("showDate").value;
//     let time = document.getElementById("showTime").value;
//     let theater = document.getElementById("theaterName").value;

//     if(date && time && theater){
//         alert(`Show Reserved Successfully!\n\nDate: ${date}\nTime: ${time}\nTheater: ${theater}`);
//         document.getElementById("bookingPopup").style.display = "none";
//     } else {
//         alert("Please fill all details!");
//     }
// });





document.addEventListener("DOMContentLoaded", () => {
    // --- 1. HANDLE LOGIN DISPLAY ---
    const user = localStorage.getItem("cinimaticsUser");
    const signinBtn = document.getElementById("signinBtn");

    if (user && signinBtn) {
        // Change button text to show email and change link behavior
        signinBtn.innerText = "Logout (" + user.split('@')[0] + ")";
        signinBtn.href = "#"; 
        
        signinBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if(confirm("Do you want to logout?")) {
                localStorage.removeItem("cinimaticsUser");
                location.reload();
            }
        });
    }

    // --- 2. SEARCH FUNCTIONALITY ---
    const searchInput = document.getElementById('movieSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const movies = document.querySelectorAll('.movie-card');
            
            movies.forEach(movie => {
                const title = movie.querySelector('h4').innerText.toLowerCase();
                if (title.includes(term)) {
                    movie.style.display = "block";
                } else {
                    movie.style.display = "none";
                }
            });
        });
    }

    // --- 3. BOOKING POPUP LOGIC ---
    const popup = document.getElementById("bookingPopup");
    const closeBtn = document.getElementById("closePopup");
    const reserveBtn = document.getElementById("reserveBtn");

    // Open popup
    document.querySelectorAll(".bookShow").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            if (popup) popup.style.display = "flex";
        });
    });

    // Close popup
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    // Process Reservation
    if (reserveBtn) {
        reserveBtn.addEventListener("click", () => {
            const date = document.getElementById("showDate").value;
            const time = document.getElementById("showTime").value;
            const theater = document.getElementById("theaterName").value;

            if(date && time && theater){
                alert(`Show Reserved Successfully!\n\nDate: ${date}\nTime: ${time}\nTheater: ${theater}`);
                popup.style.display = "none";
            } else {
                alert("Please fill all details!");
            }
        });
    }
});