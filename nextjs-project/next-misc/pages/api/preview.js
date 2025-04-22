export default function handler(req, res) {
    res.setPreviewData({ user: "admin" });
    res.redirect(res.query.redirect);

}