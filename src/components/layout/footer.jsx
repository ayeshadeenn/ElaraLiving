function Footer () {
   return (
        <footer className="bg-elara-brown px-8 py-12 text-white md:px-14 lg:px-20">
            <div className="mx-auto grid max-w-[1050px] gap-10 md:grid-cols-3 md:gap-16">

                {/* Studio */}
                <div>
                    <h3 className="mb-4 text-[10px] font-normal uppercase tracking-wide"> 
                        Studio Essence
                    </h3>

                    <p className="max-w-[240px] text-[9px] leading-[1.7] text-white/70">
                        Creating thoughtfully desgined spaces that reflect your essence and lifestyle.
                    </p>
                </div>

                {/*Contact*/}
                <div>
                    <h3 className="mb-4 text-[10px] font-normal uppercase tracking-wide">
                        Contact
                    </h3>

                    <address className="text-[9px] not-italic leading-[1.8] text-white/70">
                        123 Design Avenue
                        <br />
                        San francisco, CA 94035
                        <br />
                        hello@elaraliving.com
                        <br />
                        +1 (555) 123-4567
                    </address>
                </div>

                {/*sSocial*/}
                <div>
                    <h3 className="mb-4 text-[10px] font-normal uppercase tracking-wide">
                        Connect
                    </h3>

                    <div className="flex gap-5 text-[9px] text-white/70">
                        <a href="#" className="transition-opacity hover:opacity-60">Whatsapp</a>
                        <a href="#" className="transition-opacity hover:opacity-60">Instagram</a>
                        <a href="#" className="transition-opacity hover:opacity-60">Pinterest</a>
                    </div>
                </div>
            </div>

             {/*Copyright*/}
                <div className="mx-auto mt-12 max-w-[1050px] border-t border-white/10 pt-4">
                    <p className="text-[8px] text-white/60">
                        © 2026 Elara Living. All rights reserved.
                    </p>
                </div>

        </footer>
   )
}
export default Footer;