const axios = require("axios")

async function nobg(url) {
	return new Promise(async (resolve, reject) => {
		const payload = {
			image_file_b64: "",
			image_url: url,
			size: "preview",
			type: "auto",
			type_level: "1",
			format: "auto",
			roi: "0% 0% 100% 100%",
			crop: false,
			crop_margin: "0",
			scale: "original",
			position: "original",
			channels: "rgba",
			add_shadow: false,
			semitransparency: true,
			bg_color: color,
			bg_image_url: "",
		};
		await axios({
			method: "POST",
			url: "https://api.remove.bg/v1.0/removebg",
			data: payload,
			headers: {
				accept: "application/json",
				"X-API-Key": "UgjxxGCBGrEy98UwMwziHLp2",
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				const buffer = Buffer.from(res.data.data.result_b64, "base64");
				resolve(buffer);
			})
			.catch((e) => {
				resolve(e?.response);
			});
	});
};

module.exports = { nobg }