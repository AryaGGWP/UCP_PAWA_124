// Fungsi untuk menangani interaksi form pencarian
document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan efek animasi ketika input pencarian difokuskan
    const searchInput = document.getElementById('search');
    const searchButton = document.querySelector('.search button');

    searchInput.addEventListener('focus', function() {
        searchInput.style.backgroundColor = '#f1faee'; // Mengubah warna latar saat input difokuskan
        searchInput.style.borderColor = '#0096c7'; // Mengubah warna border saat input difokuskan
    });

    searchInput.addEventListener('blur', function() {
        searchInput.style.backgroundColor = ''; // Mengembalikan warna latar setelah blur
        searchInput.style.borderColor = '#00b4d8'; // Mengembalikan warna border
    });

    // Menambahkan efek hover pada tombol pencarian
    searchButton.addEventListener('mouseover', function() {
        searchButton.style.backgroundColor = '#0077b6'; // Mengubah warna tombol saat hover
    });

    searchButton.addEventListener('mouseout', function() {
        searchButton.style.backgroundColor = '#00b4d8'; // Mengembalikan warna tombol setelah hover
    });
});

// Fungsi untuk validasi form pencarian (optional)
function validateForm() {
    const searchValue = document.getElementById('search').value;
    if (!searchValue) {
        alert("Harap masukkan nama kolam renang.");
        return false;
    }
    return true;
}

// Fungsi untuk menampilkan loading saat menunggu respons server
function showLoading() {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.classList.add('loading');
    loadingIndicator.innerHTML = '<span>Loading...</span>';
    document.body.appendChild(loadingIndicator);
}

// Fungsi untuk menghilangkan loading indicator
function hideLoading() {
    const loadingIndicator = document.querySelector('.loading');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// Menambahkan event listener ke form pencarian untuk menampilkan loading saat proses pencarian
const searchForm = document.querySelector('.search form');
if (searchForm) {
    searchForm.addEventListener('submit', function() {
        showLoading();
    });
}
