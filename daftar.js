document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form')

  form.addEventListener('submit', async function(e) {
    e.preventDefault()

    const nama = document.getElementById('nama').value
    const email = document.getElementById('email').value
    const noHp = document.getElementById('phone').value
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value
    const role = document.querySelector('input[name="role"]:checked').value
    const password = document.getElementById('password').value

    const { data, error } = await supabaseClient
      .from('User')
      .insert([{
        nama: nama,
        email: email,
        no_hp: noHp,
        jenis_kelamin: jenisKelamin,
        role: role,
        password: password
      }])

    if (error) {
      alert('Gagal daftar: ' + error.message)
    } else {
      alert('Berhasil daftar!')
      window.location.href = 'index.html'
    }
  })
})