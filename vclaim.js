/**
 * Fungsi VClaim
 * Wrapper AJAX untuk memanggil endpoint BPJS (VClaim) via backend "/bpjs".
 * Tujuan: memudahkan pemanggilan API tanpa perlu nulis kode AJAX berulang.
 *
 * @param {string} endpoint - URL endpoint BPJS (misalnya: "SEP/12345")
 * @param {string} method - HTTP method ("get", "post", dll.) default: "get"
 * @param {object} payload - Data JSON yang akan dikirim
 * @param {function} callback - Fungsi callback untuk menerima hasil (err, res)
 */
function vclaim_baru(endpoint, method = "get", payload = {}, callback) {
    $.ajax({
        url: "/bpjs", // Backend yang handle request ke BPJS
        type: "POST", // Selalu POST ke backend
        contentType: "application/json", // Format JSON
        data: JSON.stringify({
            endpoint: endpoint, // Endpoint tujuan
            method: method,     // Method HTTP
            payload: payload    // Data request
        }),
        success: function (res) {
            // Callback sukses
            if (typeof callback === "function") {
                callback(null, res);
            }
        },
        error: function (xhr, status, error) {
            // Callback error
            console.error("Error BPJS:", error);
            if (typeof callback === "function") {
                callback(error, null);
            }
        }
    });
};

/**
 * Contoh implementasi fungsi v()
 * Memanggil vclaim_baru untuk endpoint tertentu lalu handle responnya.
 */
function v() {
    const payload = {};
    const url = `endpoint_disini`;
    const method = "get";

    vclaim_baru(url, method, payload, function (err, res) {
        if (err) {
            return Swal.fire('Server Error', 'Internal Server Error', 'error');
        }

        // Ambil metaData dari response
        const meta = res?.metaData || res?.metadata || {};
        const code = parseInt(meta.code);
        const msg = meta.message || 'Terjadi kesalahan';

        // Handle berdasarkan kode respon
        if (code === 200) {
            Swal.fire('', msg, 'success').then(() => {
                saveSession("", res.response);
            });
        } else if (code === 201) {
            Swal.fire('', msg, 'info').then(() => {
                const hasil = getDummy("")?.response;
                saveSession("", hasil);
            });
        } else {
            Swal.fire('', msg, 'error');
        }
    });
}
