"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import fetchSuggestion from "@/lib/fetchSuggestion";
import OragnizeIt from '@/public/images/OragnizeIt.png';

export default function Header() {
  const readyForGPTRef = useRef(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setSuggestion] = useState<string>('');
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  useEffect(() => {
    if (!board.columns?.size) {
      return;
    }
    const fetchSuggestionFunc = async () => {
      setLoading(true);
      const suggestionResult = await fetchSuggestion(board);
      setSuggestion(suggestionResult);
      setTimeout(() => {
        readyForGPTRef.current = true;
      }, 10000);
      setLoading(false);
    };
    if (!loading && readyForGPTRef.current) {
      readyForGPTRef.current = false;
      fetchSuggestionFunc();
    }
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src={OragnizeIt}
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
          priority={true}
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon
              className="h-6 w-6 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar
            name="Or Assayag"
            round
            size="50"
            color="#0055D1"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 py-2 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1
          ${loading && 'animate-spin'}`}
          />
          {suggestion && !loading ? suggestion : 'GPT is summarizing your tasks for the day...'}
        </p>
      </div>
    </header>
  );
}