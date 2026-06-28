export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-3">
                    Nilam Color World
                </h2>

                <p className="text-gray-400">
                    Premium Paint Solutions For Every Home
                </p>

                <div className="mt-6 flex justify-center gap-6">
                    <span>Facebook</span>
                    <span>Instagram</span>
                    {/* <span>WhatsApp</span> */}
                    <span>
                        <a
                            href={`https://wa.me/919576321825?text=Hi, I'm interested in ONLINE PAINT STORE`}
                            target="_blank"
                            rel="noreferrer">WhatsApp
                        </a></span>
                </div>
            </div>
        </footer>
    );
}