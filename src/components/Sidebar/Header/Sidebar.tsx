'use client';

import LogoutButton from '@/components/LogoutButton';
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
              <Image
                className="ml-4"
                src="/sidebarpainelcurso.png"
                alt="Painel dos Cursos"
                width={20}
                height={20}
              />
              <li>Painel das Disciplinas</li>
            </div>
            <LogoutButton />
          </ul>
        </ul>
      </aside>
    </div>
  );
}
