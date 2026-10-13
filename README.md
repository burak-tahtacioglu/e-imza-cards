# e‑İmza Kartlar — GitHub Pages

Bu klasör, App Store Connect'te kullanılacak statik destek ve gizlilik sayfalarını içerir.

## GitHub Pages'i açma

1. Bu proje bir GitHub deposuna gönderilir.
2. GitHub'da **Settings → Pages** açılır.
3. **Build and deployment** altında **Deploy from a branch** seçilir.
4. Branch olarak `main`, klasör olarak `/docs` seçilip kaydedilir.
5. Yayın tamamlandıktan sonra adresler şu biçimde olur:

   - Destek URL: `https://KULLANICI.github.io/DEPO/support.html`
   - Gizlilik URL: `https://KULLANICI.github.io/DEPO/privacy.html`

Bu iki adres App Store Connect'teki **Support URL** ve **Privacy Policy URL** alanlarına girilir.

## Destek talepleri

Site GitHub Pages üzerinde açıldığında “Sorun bildir” düğmesi depo adresini otomatik algılar ve güvenli bir GitHub Issue şablonu oluşturur. Deponun **Issues** özelliğinin açık olması gerekir.

## Yerel önizleme

Proje kökünde:

```sh
python3 -m http.server 4174 --directory docs
```

Ardından `http://127.0.0.1:4174/` açılır.
