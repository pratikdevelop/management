terraform {
  required_providers {
    render = {
      source  = "jackall3n/render"
      version = "1.2.0"
    }
  }
}

provider "render" {
  api_key = "rnd_emfMYWKtcY8x0Xcs0lXVw0sO1DwS"
  email   = "pratikraut88895@gmail.com"
}

resource "render_service" "angular" {
  name   = "angulr-16"
  repo   = "https://github.com/pratikdevelop/management"
  branch = "main"
  type   = "static_site"

  static_site_details = {
    build_command = "npm install --force && npm run build;"
    publish_path  = "dist"
    force_https   = true

  }
}
