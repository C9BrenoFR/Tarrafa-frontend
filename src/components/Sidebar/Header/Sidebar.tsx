'use client';

import LogoutButton from '@/components/auth/LogoutButton';
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex h-screen">
      <aside className="hidden sm:flex fixed top-0 left-0 h-screen w-[240px] flex-col justify-between bg-[#F1F2F7] text-[#08243180] font-poppins text-[11px] z-50">
        <ul className="sidebaralign">
          <Link href="/">
            <Image
              src="/iconeTarrafa.svg"
              alt="Tarrafa logomark"
              width={200}
              height={60}
            />
          </Link>

          <ul className="sidebaralign space-y-4">
            <li className="">MENU</li>
            <div className="sidebarpainel space-x-3">
              <div>
                <Image
                  className="ml-4"
                  src="/sidebarpainelcurso.png"
                  alt="Painel das Disciplinas"
                  width={20}
                  height={20}
                />
              </div>
              <li>Painel das Disciplinas</li>
            </div>

          </ul>
        </ul>
        <div className="flex justify-end p-2">
          <LogoutButton />
        </div>
      </aside>
    </div>
  );
}
