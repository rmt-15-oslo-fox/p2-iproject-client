<template>
  <div class="bg-white">
    <div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            All Animes
          </h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sort
                  <ChevronDownIcon
                    class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="option.href"
                        :class="[
                          option.current
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        {{ option.name }}
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button
              type="button"
              class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">Back to Dashboard</span>
              <ViewGridIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="movies-heading" class="pt-6 pb-24">
          <h2 id="movies-heading" class="sr-only">Movies</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
            <!-- Movies grid -->
            <div
              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8"
            >
              <anime-card
                v-for="anime in animes"
                :key="anime.id"
                :anime="anime"
              ></anime-card>
            </div>
          </div>
          <movie-pagination
            class="mt-4"
            :pageData="pageData"
          ></movie-pagination>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon, ViewGridIcon } from '@heroicons/vue/solid';
import MoviePagination from '../../components/movies/MoviePagination.vue';
import AnimeCard from '../../components/animes/AnimeCard.vue';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Now Playing', href: '#', current: false },
  { name: 'Upcoming', href: '#', current: false },
];

const animeData = {
  status_code: 200,
  message:
    'Page 1 contains 17 anime. Last page number is 1 for a total of 17 anime',
  data: {
    current_page: 1,
    count: 17,
    documents: [
      {
        anilist_id: 21,
        mal_id: 21,
        format: 0,
        status: 1,
        titles: {
          en: 'One Piece',
          jp: 'ワンピース',
          it: 'One Piece',
        },
        descriptions: {
          en: '',
          it:
            "Monkey D. Luffy (Nel doppiaggio italiano, Rubber) è un pirata diciassettenne che da bambino ha mangiato il frutto del diavolo Gom Gom che gli ha permesso di diventare un uomo gomma perdendo però la facoltà di nuotare. Il suo sogno è quello di diventare il Re dei pirati trovando il leggendario One Piece, tesoro nascosto da Gol D. Roger, il vecchio Re dei pirati. Per riuscire nell'impresa Rufy dovrà formare la sua ciurma formata da amici e abili combattenti del quali il pirata potrà fidarsi ciecamente. Nasce così la Ciurma di Cappello di Paglia, legata dall'indissolubile legame dell'amicizia.",
        },
        start_date: '1999-10-20T00:00:00Z',
        end_date: '1970-01-01T00:00:00Z',
        season_period: 3,
        season_year: 1999,
        episodes_count: 992,
        episode_duration: 24,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg',
        cover_color: '#e4a15d',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Fantasy',
          'Pirates',
          'Ensemble Cast',
          'Shounen',
          'Super Power',
          'Male Protagonist',
          'Conspiracy',
          'Ships',
          'Tragedy',
          'Time Skip',
          'Politics',
          'War',
          'Lost Civilization',
          'Swordplay',
          'Shapeshifting',
          'Henshin',
          'Animals',
          'Primarily Adult Cast',
          'Real Robot',
          'Gender Bending',
          'Anachronism',
          'Primarily Male Cast',
          'Skeleton',
          'Anti-Hero',
          'Ninja',
          'Espionage',
          'Guns',
          'Cyborg',
          'Nudity',
          'Mermaid',
          'Kuudere',
          'Tanned Skin',
          'Time Manipulation',
          'Zombie',
          'Battle Royale',
          'Assassins',
          'Adoption',
        ],
        score: 86,
        id: 11,
      },
      {
        anilist_id: 105143,
        mal_id: 38234,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece Stampede',
          jp: 'ONE PIECE STAMPEDE（スタンピード）',
        },
        descriptions: {
          en:
            "The 14th One Piece movie, which commemorates the anime's 20th anniversary, takes place during the Pirates Festival, an epic treasure hunt in which pirates from across the globe race to find an item that once belonged to Gol D. Roger himself!",
        },
        start_date: '2019-08-09T00:00:00Z',
        end_date: '2019-08-09T00:00:00Z',
        season_period: 2,
        season_year: 2019,
        episodes_count: 1,
        episode_duration: 101,
        trailer_url: 'https://www.youtube.com/embed/-f3_oA0uwY0',
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105143-x7iaiwKyGKpB.jpg',
        cover_color: '#e4c935',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/105143-y8oSKa8PSsgK.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Fantasy',
          'Ensemble Cast',
          'Pirates',
          'Super Power',
          'Shounen',
          'Male Protagonist',
          'Primarily Adult Cast',
          'Kaiju',
          'Ships',
          'Kuudere',
        ],
        score: 81,
        id: 7122,
      },
      {
        anilist_id: 12859,
        mal_id: 12859,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece Film: Z',
          jp: 'ワンピースフィルム Z',
        },
        descriptions: {
          en:
            'The story will be about the first battle in The New World arc and will be said to include the "Strawhats\' Greatest Enemy Yet."',
        },
        start_date: '2012-12-15T00:00:00Z',
        end_date: '2012-12-15T00:00:00Z',
        season_period: 3,
        season_year: 2012,
        episodes_count: 1,
        episode_duration: 107,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12859-uQFENDPzMWz6.jpg',
        cover_color: '#f1ae5d',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/12859-XjlBW6o2YwUb.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Pirates',
          'Shounen',
          'Male Protagonist',
          'Super Power',
          'Ships',
          'Revenge',
          'Age Regression',
          'Kuudere',
        ],
        score: 79,
        id: 6116,
      },
      {
        anilist_id: 4155,
        mal_id: 4155,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece Film Strong World',
          jp: 'One Piece Film Strong World',
        },
        descriptions: {
          en:
            'The story begins somewhere between the Thriller Bark arc and the Sabaody Archipelago arc. The main villain\'s name is "Golden Lion" Shiki. 20 years ago he lost a battle against Monkey D. Garp and Sengoku and was imprisoned in Impel Down, but managed to escape. After that he starts to collect his crew and steals Nami to make her his navigator. Luffy tries to get to Shiki\'s hideout to free his friend. ',
        },
        start_date: '2009-12-12T00:00:00Z',
        end_date: '2009-12-12T00:00:00Z',
        season_period: 3,
        season_year: 2009,
        episodes_count: 1,
        episode_duration: 113,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx4155-qNQTBREF92fp.png',
        cover_color: '#f1bb50',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/4155-2PkLjTHddz2s.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Fantasy',
          'Shounen',
          'Pirates',
          'Super Power',
          'Primarily Adult Cast',
          'Primarily Male Cast',
          'Ships',
          'Skeleton',
          'Kuudere',
        ],
        score: 78,
        id: 5433,
      },
      {
        anilist_id: 21335,
        mal_id: 31490,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece Film Gold',
          jp: 'ワンピースフィルムゴールド',
        },
        descriptions: {
          en:
            "In One Piece Film Gold, The Straw Hats are at it again in an all-new high-flying adventure! A gripping tale unfolds in the spectacular city of Gran Tesoro, where Luffy and his crew are drawn by dreams of hitting the jackpot. With so much luck, Luffy's winning streak can't possibly end. But behind the gilded curtains lies a powerful king whose deep pockets and deeper ambitions spell disaster for all.\n<br><br>\n(Source: FUNimation)",
        },
        start_date: '2016-07-23T00:00:00Z',
        end_date: '2016-07-23T00:00:00Z',
        season_period: 2,
        season_year: 2016,
        episodes_count: 1,
        episode_duration: 120,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21335-XsXdE0AeOkkZ.jpg',
        cover_color: '#f1bb35',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21335-ps20iVSGUXbD.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Drama',
          'Fantasy',
          'Shounen',
          'Super Power',
          'Pirates',
          'Male Protagonist',
          'Ensemble Cast',
          'Ships',
          'Gambling',
          'Skeleton',
          'Bar',
          'Anachronism',
          'Kuudere',
        ],
        score: 78,
        id: 6499,
      },
      {
        anilist_id: 464,
        mal_id: 464,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece: Omatsuri Danshaku to Himitsu no Shima',
          jp: 'ワンピース オマツリ男爵と秘密の島',
        },
        descriptions: {
          en:
            "The Straw Hat crew obtain an advertisement for a recreational island on the Grand Line run by the Baron Omatsuri. Luffy decides to take this opportunity to kick back and relax. Unfortunately, when they arrive at the island, they are asked to compete in contests through unity for access to relaxation. However, there seems to be a mysterious air on the island, as the Straw Hat Pirates begin to fight amongst themselves, while Robin, Chopper, and Luffy individually search for the secret behind Baron Omatsuri's island.<br><br>\n(Source: Anime News Network)",
        },
        start_date: '2005-03-05T00:00:00Z',
        end_date: '2005-03-05T00:00:00Z',
        season_period: 1,
        season_year: 2005,
        episodes_count: 1,
        episode_duration: 91,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/464.jpg',
        cover_color: '#e49335',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/464-wmQoE1Ywxghs.jpg',
        genres: [
          'Adventure',
          'Comedy',
          'Fantasy',
          'Shounen',
          'Male Protagonist',
          'Ensemble Cast',
          'Pirates',
          'Super Power',
          'Revenge',
          'Family Life',
          'Zombie',
          'Kuudere',
        ],
        score: 76,
        id: 4930,
      },
      {
        anilist_id: 462,
        mal_id: 462,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece: Dead End no Bouken',
          jp: 'ワンピース デッドエンドの冒険',
        },
        descriptions: {
          en:
            'Luffy and crew arrive at the harbour of Anabaru. The local casino is holding a competition in which the winner will obtain a huge monetary reward if he reaches the finishing line first. Nami is elated and decides to participate in the competition. However, there is a conspiracy going behind the competition and the mastermind is an ex-military commander, Gasparde. His plan is to lure all the pirates to the military base and send them to their deaths. Luffy and gang have to overcome the numerous tests and tribulations along the way to complete this dead-end adventure. <br><br>\n(Source: Anime News Network)',
        },
        start_date: '2003-03-01T00:00:00Z',
        end_date: '2003-03-01T00:00:00Z',
        season_period: 1,
        season_year: 2003,
        episodes_count: 1,
        episode_duration: 95,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx462-uL6YD2JFlm9W.png',
        cover_color: '#f1bb35',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/462-Z074owEvilUu.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Super Power',
          'Shounen',
          'Ensemble Cast',
          'Revenge',
          'Gambling',
          'Ships',
          'Fugitive',
          'Shapeshifting',
          'Male Protagonist',
          'Primarily Male Cast',
          'Kuudere',
        ],
        score: 72,
        id: 4928,
      },
      {
        anilist_id: 3848,
        mal_id: 3848,
        format: 2,
        status: 0,
        titles: {
          en:
            'One Piece: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura',
          jp:
            'ＯＮＥ ＰＩＥＣＥ（ワンピース） エピソードオブチョッパー＋冬に咲く、奇跡の桜',
        },
        descriptions: {
          en:
            "The movie is a retelling of the Drum Island arc with new music and animation. Vivi has been removed from the plot while both Nico Robin and Franky, who joined the crew after the Drum Island arc, have been added. The movie also has the Straw Hat's new ship, the Thousand Sunny. It has been stated that Oda will be creating a new character for this movie, Wapol's older brother, Mushul, who also appears to be a Devil Fruit user. <br>",
        },
        start_date: '2008-03-01T00:00:00Z',
        end_date: '2008-03-01T00:00:00Z',
        season_period: 1,
        season_year: 2008,
        episodes_count: 1,
        episode_duration: 113,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b3848-mkoz4nioyztr.png',
        cover_color: '#50bbe4',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/3848-LXsSQtSFu4e9.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Shounen',
          'Super Power',
          'Kuudere',
        ],
        score: 71,
        id: 5408,
      },
      {
        anilist_id: 2107,
        mal_id: 2107,
        format: 2,
        status: 0,
        titles: {
          en:
            'One Piece: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi',
          jp: '劇場版ワンピース エピソードオブアラバスタ 砂漠の王女と海賊たち',
        },
        descriptions: {
          en: 'A retelling of the Alabasta arc.',
        },
        start_date: '2007-03-03T00:00:00Z',
        end_date: '2007-03-03T00:00:00Z',
        season_period: 1,
        season_year: 2007,
        episodes_count: 1,
        episode_duration: 90,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2107-H8bRuRRbhCIJ.jpg',
        cover_color: '#e4a143',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/2107-Je0JIEoxx1VF.jpg',
        genres: [
          'Action',
          'Adventure',
          'Fantasy',
          'Pirates',
          'Super Power',
          'Shounen',
          'Kuudere',
        ],
        score: 70,
        id: 5160,
      },
      {
        anilist_id: 465,
        mal_id: 465,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece The Movie: Karakuri-jou no Mecha Kyohei',
          jp: 'ワンピース THE MOVIE カラクリ城のメカ巨兵',
        },
        descriptions: {
          en:
            'The crew salvages a treasure chest from a sinking wreck, but inside turns out to be an old lady hiding. To get the Straw Hat Pirates to take her home, she promises them the treasure of a golden crown on her island, Mecha Island. When they arrive, their ship is first attacked by the lord of the island. But later he decides to use the pirates to help him solve the riddle of the Golden Crown.<br><br>\n(Source: Anime News Network)',
        },
        start_date: '2006-03-04T00:00:00Z',
        end_date: '2006-03-04T00:00:00Z',
        season_period: 1,
        season_year: 2006,
        episodes_count: 1,
        episode_duration: 94,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx465-qSRr0MKYhS0I.jpg',
        cover_color: '#43aeff',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/465-dYMZ6SHNeOkL.jpg',
        genres: [
          'Adventure',
          'Comedy',
          'Fantasy',
          'Shounen',
          'Pirates',
          'Super Power',
          'Kuudere',
        ],
        score: 68,
        id: 4931,
      },
      {
        anilist_id: 459,
        mal_id: 459,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece (Movie)',
          jp: 'ワンピース (映画)',
        },
        descriptions: {
          en:
            "There once was a pirate known as the Great Gold Pirate Woonan, who obtained almost 1/3 of the world's gold. Over the course of a few years, the pirate's existence faded, and a legend grew that he disappeared with his gold to a remote island, an island pirates continue to search for. Aboard the Going Merry, Luffy and his crew, starved and reckless, are robbed of their treasure. In an attempt to get it back, they wreck the getaway ship, guided by a young boy named Tabio, who's a captured part of El Drago's pirate crew. El Drago's love for gold has driven him to look for Woonan's island, and thanks to Woonan's treasure map, he finds it. During this time, Luffy's crew have been split up, and despite their own circumstances, they must find a way to stop El Drago from obtaining Woonan's gold. <br><br>\n(Source: Anime News Network)",
        },
        start_date: '2000-03-04T00:00:00Z',
        end_date: '2000-03-04T00:00:00Z',
        season_period: 1,
        season_year: 2000,
        episodes_count: 1,
        episode_duration: 50,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx459-2OTwLud8OnFA.jpg',
        cover_color: '#e4ae35',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/459-c4uuz0LPvzkS.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Shounen',
          'Super Power',
          'Ensemble Cast',
          'Male Protagonist',
          'Ships',
          'Primarily Adult Cast',
          'Kuudere',
        ],
        score: 67,
        id: 4925,
      },
      {
        anilist_id: 460,
        mal_id: 460,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece: Nejimaki Jima no Bouken',
          jp: 'ワンピース ねじまき島の冒険',
        },
        descriptions: {
          en:
            'Informed by the Thief Brothers his ship has been stolen by the Trump Kyoudai (Trump Siblings) who have set up base on Clockwork Island. Monkey D. Luffy, Captain of the Going Merry and aspiring Pirate King works with his crew - Ussop, Zoro, Sanji and Nami to battle their way up Clockwork Island to reclaim their ship.<br><br>\n(Source: Anime News Network)',
        },
        start_date: '2001-03-03T00:00:00Z',
        end_date: '2001-03-03T00:00:00Z',
        season_period: 1,
        season_year: 2001,
        episodes_count: 1,
        episode_duration: 55,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx460-sVkSq3ykAv1U.jpg',
        cover_color: '#ffc91a',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/460-ruLnAj6wDrTL.png',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Shounen',
          'Ensemble Cast',
          'Super Power',
          'Crime',
          'Battle Royale',
          'Male Protagonist',
          'Kuudere',
          'Primarily Male Cast',
        ],
        score: 67,
        id: 4926,
      },
      {
        anilist_id: 463,
        mal_id: 463,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece: Norowareta Seiken',
          jp: 'ワンピース呪われた聖剣',
        },
        descriptions: {
          en:
            'Luffy and crew go to an island searching for a legendary sword, said to be the most expensive in the world. Soon attacking marines and beautiful maidens split the crew. Zoro betrays the crew to help an old friend, Luffy and Usopp wander through a cave, and the rest help a village fight marines. When Zoro defeats Sanji he takes the sacred pearls that are the only defense against the evil sword that will plunge the world into darkness. <br><br>\n(Source: Anime News Network)',
        },
        start_date: '2004-03-06T00:00:00Z',
        end_date: '2004-03-06T00:00:00Z',
        season_period: 1,
        season_year: 2004,
        episodes_count: 1,
        episode_duration: 95,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx463-QDnETPoHp9oD.jpg',
        cover_color: '#e45078',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/463-zgU5XjUCR7Kv.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Shounen',
          'Super Power',
          'Swordplay',
          'Ensemble Cast',
          'Male Protagonist',
          'Ships',
          'Shapeshifting',
          'Cult',
          'Animals',
          'Fairy Tale',
          'Kuudere',
          'Fugitive',
        ],
        score: 67,
        id: 4929,
      },
      {
        anilist_id: 461,
        mal_id: 461,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece: Chinjuushima no Chopper Oukoku',
          jp: 'ワンピース 珍獣島のチョッパー王国',
        },
        descriptions: {
          en:
            'The crew comes upon Crown Island where the animals can talk and they makes Chopper their new king. But there are human hunters there also looking for the legendary horns that will give the person who consumes it immense power. Luffy and friends must stop them from destroying this animal kingdom.<br><br>\n(Source: Anime News Network)',
        },
        start_date: '2002-03-02T00:00:00Z',
        end_date: '2002-03-02T00:00:00Z',
        season_period: 1,
        season_year: 2002,
        episodes_count: 1,
        episode_duration: 55,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx461-DC9fMDl3AaK1.jpg',
        cover_color: '#e49343',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/461-0pvcIaXC0p70.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Animals',
          'Shounen',
          'Ensemble Cast',
          'Super Power',
          'Male Protagonist',
          'Shapeshifting',
          'Primarily Male Cast',
          'Ships',
          'Kuudere',
        ],
        score: 65,
        id: 4927,
      },
      {
        anilist_id: 9999,
        mal_id: 9999,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece 3D: Mugiwara Chase',
          jp: 'ONE PIECE 3D 麦わらチェイス',
        },
        descriptions: {
          en: '',
        },
        start_date: '2011-03-19T00:00:00Z',
        end_date: '2011-03-19T00:00:00Z',
        season_period: 1,
        season_year: 2011,
        episodes_count: 1,
        episode_duration: 30,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9999.jpg',
        cover_color: '#ffa100',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/9999-T5jCX3o3cxeN.jpg',
        genres: [
          'Action',
          'Adventure',
          'Comedy',
          'Fantasy',
          'Pirates',
          'Full CGI',
          'Shounen',
          'CGI',
        ],
        score: 65,
        id: 5965,
      },
      {
        anilist_id: 12001,
        mal_id: 12001,
        format: 2,
        status: 0,
        titles: {
          en: 'One Piece 3D: Gekisou! Trap Coaster',
          jp: 'ONE PIECE 3D 激走! トラップコースター',
        },
        descriptions: {
          en:
            "Toei Animation released a new 3D anime short at events starting December 1, 2011. The short run about 12 minutes long and played at stereoscopic 3D theaters at Aichi Prefecture's Lagunasia theme park, Nagasaki Prefecture's Huis Ten Bosch theme park, Kanagawa Prefecture's Yokohama Landmark Tower, and Hiroshima Prefecture's NTT CRED Hall.<br><br>\n(Source: Anime News Network)",
        },
        start_date: '2011-12-01T00:00:00Z',
        end_date: '2011-12-01T00:00:00Z',
        season_period: 3,
        season_year: 2011,
        episodes_count: 1,
        episode_duration: 12,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx12001-XX0NNNfaKZ3e.jpg',
        cover_color: '#f1e435',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/n12001-IljdXqN8CTU7.jpg',
        genres: ['Action', 'Adventure', 'Comedy', 'Shounen', 'Full CGI'],
        score: 62,
        id: 6084,
      },
      {
        anilist_id: 126649,
        mal_id: 38419,
        format: 2,
        status: 0,
        titles: {
          en: 'Tokyo One Piece Tower: Tongari Shima no Dai Hihou',
          jp: '東京ワンピースタワー トンガリ島の大秘宝',
        },
        descriptions: {
          en:
            "A Tokyo One Piece Tower exclusive film. It's a tie-in to a real treasure hunting event in collaboration with Takarush Corp. for a limited time called Treasure Hunting: Tongari Shima no Daibouken. During this, you’ll decipher the mysteries of ancient documents found by Luffy, Usopp, and Chopper, and then set out to find the nest of the mysterious animal known as Tongari Ton!\n<br><br>\nThe film itself begins at the end of your treasure hunting adventure at the Tokyo One Piece Tower, where the Straw Hat Crew are tricked into opening a chest in a cave thinking it's where the Tongari Island treasure is.\n<br><br>\n(Source: Otakumode)",
        },
        start_date: '2016-11-01T00:00:00Z',
        end_date: '2016-11-01T00:00:00Z',
        season_period: 3,
        season_year: 2016,
        episodes_count: 1,
        episode_duration: 10,
        cover_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b126649-sbuKTAghtsln.jpg',
        cover_color: '#e48628',
        banner_image:
          'https://s4.anilist.co/file/anilistcdn/media/anime/banner/126649-pxeImm81vD6l.jpg',
        genres: ['Action', 'Adventure', 'Comedy', 'Pirates'],
        score: 57,
        id: 7809,
      },
    ],
    last_page: 1,
  },
  version: '1',
};

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    ViewGridIcon,
    AnimeCard,
    MoviePagination,
  },
  computed: {
    sortOptions() {
      return sortOptions;
    },
    animes() {
      return animeData.data.documents;
    },
    pageData() {
      return {
        page: animeData.data.current_page,
        total_pages: animeData.data.last_page,
      };
    },
  },
};
</script>
