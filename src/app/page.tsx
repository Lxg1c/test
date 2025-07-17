import Link from "next/link";

export default function Home() {
    return (
        <div className='app w-full h-screen flex justify-center items-center'>
            <Link href='/profile' className='bg-green-500 rounded-2xl px-6 py-4 text-white'>
                <button className='cursor-pointer'>Перейти в профиль</button>
            </Link>
        </div>
    );
}