import { SITE_CONFIG } from '../siteData';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <a className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all" href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.238-.039.373.285.137.329.469 1.144.512 1.23.044.086.072.187.014.303s-.086.13-.173.23c-.086.101-.182.224-.261.302-.087.087-.179.182-.077.357.101.174.45 1.745 1.54 2.182.162.064.295.103.396.136.195.064.372.054.513.033.158-.024.463-.189.528-.372.065-.182.065-.339.046-.372s-.072-.054-.153-.094"></path></svg>
      </a>
      {/* Optional chatbot button could go here */}
    </div>
  );
}
