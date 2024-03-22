var storyContent = ﻿{"inkVersion":20,"root":[["^Product","\n","^NIGHTWATCH AT THE GALLERY","\n","^Maintainer","\n","^MR. Bapak Ali","\n","^Game Overview:","\n","^A 3D FPS SinglePlayer narrative horror game.  As a security guard at a mysterious Indonesian art gallery, you will experience more than just a routine night shift under the dim gallery lights. Start with a seemingly ordinary to-do list. But beyond the routine patrols and security checks, there are unsettling truths hidden in the shadows. Your choices, actions, and even inaction will unravel a narrative full of suspense and hidden horrors.","\n","ev","str","^> More","/str","/ev",{"*":"0.c-0","flg":4},["ev",{"^->":"0.18.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":2},{"s":["^> Collectable Items",{"->":"$r","var":true},null]}],["ev",{"^->":"0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-2","flg":2},{"s":["^> PlayerAreaFlow",{"->":"$r","var":true},null]}],["ev",{"^->":"0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-3","flg":2},{"s":["^> GameStory",{"->":"$r","var":true},null]}],{"c-0":["\n","^Target audience:","\n","^Fans of horror games","\n","^Players who enjoy psychological horror","\n","^People interested in Indonesian culture and folklore","\n","^Gamers who enjoy exploration and/or puzzle-solving","\n","^Key Features:","\n","^Psychological horror, Exploration, Puzzle-solving, Choices and consequences, Immersive atmosphere ,Indonesian-inspired chills","\n","^Project Scope:","\n","^Levels: 1 main level","\n","^Endings: 2 different endings","\n","^Rooms: 10 rooms (Staff Room, Hall A, Reception Area, Warehouse, Wayang Room, Toilet, Paint Room, Archive Room, Hidden Room, Hallways A and B)","\n","^Fundamental Gameplay Mechanics:","\n","^Patrolling","\n","^Light Puzzle","\n","^ObservationandEvent","\n","^Collectable Item Gathering and Mystical Symbol Deciphering","\n","^DoorLockSystem","\n","^Game Progress Quest","\n","^Multiple Endings & Replayability (Optional)","\n","^Timed Decision (Optional)","\n","^GameContent_____________________________________","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.18.s"},[{"#n":"$r2"}],"\n","^1x Flashlight","\n","^1x wayangSrikandi","\n","^1x lukisanBaru","\n","^2x Lilin","\n",{"->":"0.g-0"},{"#f":5}],"c-2":["ev",{"^->":"0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":"0.19.s"},[{"#n":"$r2"}],"\n","^StaffRoom: Raja bangun dan memulai hari, membaca panduan tugas harian.","\n","^Hall A: Raja melakukan patroli di main hall malam hari, melakukan tugas hariannya.","\n","^Staff Room and Reception Area: Sebelum berpindah ke gudang, Raja menyelesaikan tugas tambahan di staff room dan reception area.","\n","^Gudang: Raja menemukan lampu yang rusak dan memutuskan untuk memeriksa saklar listrik di staff room.","\n","^StaffRoom: Raja pergi ke staff room untuk memperbaiki saklar listrik yang rusak tetapi menemukan saklar itu rusak.","\n","^WayangRoom: Raja menemui kejadian aneh, termasuk hantu dan lukisan yang hilang, saat melakukan patroli.","\n","^Toilet: Raja mencari wayang Srikandi dan mengalami jumpscare.","\n","^PaintRoom: Raja menemukan lukisan baru yang hilang dan memutuskan untuk memeriksa gudang lagi.","\n","^ArsipRoom: Raja melanjutkan patroli di Area B dan akhirnya memasuki ArsipRoom, di mana dia menemukan catatan tentang sejarah tragis museum dan petunjuk tentang ruangan tersembunyi.","\n","^Hidden Room: Raja menemukan ruangan tersembunyi dengan catatan tentang cara melakukan ritual untuk menenangkan hantu atau membunuh.","\n","^Hallway A dan B: Raja lari ketakutan saat pengelihatannya menjadi merah.","\n",{"->":"0.g-0"},{"#f":5}],"c-3":["ev",{"^->":"0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":"0.20.s"},[{"#n":"$r2"}],"\n","^Pada dahalu suatu malam ...","\n","^Raja, seorang mahasiswa asal Desa Siliwangi yang keluar kota, memutuskan untuk mencoba bekerja sebagai penjaga museum.","\n",{"->":"FASE_1"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"FASE_1":[["^_ _ _ _ _ _","\n","^> Fase 1 <","\n","^Raja terbangun dari tidurnya staff room","\n","^Raja sebagai satpam jenior terkunci dari dalam yang dikarenakan penjaga senior mengunci pintu secara sengaja karena Raja pegawai baru diospek untuk melatih mental.","\n","^Kenapa demikian? karena penjaga senior tau museum ini angker dan dia ingin menguji mental pegawai barunya. Jika berhasil maka akan dipromote.","\n","^Raja melihat dan mengambil kertas panduan","\n","ev","str","^Continue... ","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Raja membaca kertas panduan.","\n","^Kertas Panduan berisi TaskDaily yaitu:","\n","^(1) Pastikan display galeri lampu-nya mati,","\n","^(2) Tutup jendela yang masih terbuka, dan","\n","^(3) Perbaiki barang display yang berantakan.","\n","^Raja mengambil senter dari atas meja untuk menavigasi museum saat gelap.","\n","^Suara anjing menggong-gong dari luar museum lari menjauh.","\n","^Raja berpatroli di daerah main hall A untuk menyelesaikan tugas TaskDaily -nya.","\n",["ev","str","^Continue... ","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^_Staffroom_ _Resepsionis_","\n","^Sebelum Raja kegudang  mengerjakan TaskDaily:","\n","^Raja melaksanakan TaskDaily (1)(2)(3)  di StaffRoom, Resepsionis.","\n","^Begitu sudah terlaksana Raja berkata:","\n","^\"Oke ini sudah waktunya aku mengecek bagian gudang\" -Raja","\n","^_ _","\n","^Begitu Raja sudah memasuki gudang","\n","^Raja menemukan kunci pintu akses gedung Area B, dan perlu melaksanakan TaskDaily(1) mematikan lampu.","\n","^Tiba-tiba Lampu gudang pecah.","\n","^Raja bergumam dalam hati:","\n","^\"Haiyaaaa lampu gudang rusak aku harus bergegas untuk cek saklar listrik yang ada di StaffRoom\" -Raja","\n","^Raja Keluar Gudang.","\n","^Trigger mainEvent secondChecklist","\n",["ev","str","^Continue... ","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"#":"CLEAR"},{"->":"FASE_1.0.FASE_2"},{"->":"FASE_1.0.FASE_2"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"FASE_2":["^_ _ _ _ _ _","\n","^> Fase 2 <","\n","^Raja menuju StaffRoom untuk menyalakan saklar listrik.","\n","^Namun terlihat fuse lampu rusak, ia harus mengambil fuseBaru di sekitar. dan raja berkata:","\n","^\"Fusenya rusak, aku harus mencari fuseBaru yang Seharusnya berdasarkan Senior ada di sekitar sini\" -Raja","\n","^Tiba-tiba terdengar suara tirai terbuka dan pintu terbuka yang bersuara \"Ngik ngik\"-SFX.","\n","^Raja melanjutkan berpatroli.","\n",{"->":"AreaA"},{"#f":5}]}],{"#f":1}],"AreaA":[["ev","str","^Cek_wayangRoom","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Cek_paintRoom","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Ke_AreaB","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"Cek_wayangRoom"},"\n",{"#f":5}],"c-1":["^ ",{"->":"Cek_paintRoom"},"\n",{"#f":5}],"c-2":["^ ",{"->":"Ke_AreaB"},"\n",{"->":"AreaA"},{"#f":5}]}],{"#f":1}],"Cek_wayangRoom":["^_ _","\n","^Raja memutuskan menge-Cek wayangRoom","\n","^Saat masuk wayangRoom untuk mengerjakan TaskDaily (1) dan (2).","\n","^Tiba-tiba ada Hantu sedang berdiri didepan display wayangSrikandi sambil bersandung;","\n","^\"Hmm hmm hmm\" -Hantu","\n","^Dan juga lampu berkedip dan wayangSrikandi hilang.","\n","^Raja pun kaget.","\n","^Terdengar suara Suara tangis pelan aneh , dan Raja pun mengecek dimana dan apa yang menyebabkan sumber suara itu.","\n","^_ _","\n","^Raja masuk Toilet, dan menemukan wayangSrikandi ada disitu.","\n","^Raja mengambil wayang srikandi","\n","^Tiba-tiba salah satu keran-air menyala.","\n","^Raja pun mematikan keran-air itu","\n","^Tiba-tiba ada hantu bergantung sekilas hilang.","\n","^Raja tidak menghiraukan itu.","\n","^Raja lanjut menuju ke wayangRoom.","\n","^_ _","\n","^Di wayangRoom Raja memasang kembali wayangSrikandi itu ke tempat -nya.","\n",{"->":"AreaA"},{"#":"CLEAR"},{"#f":1}],"Cek_paintRoom":["^_ _","\n","^Raja memutuskan masuk ke paintRoom.","\n","^dan juga melaksanakan TaskDaily (1)(2)(3).","\n","^Raja menyadari heran ada lukisanBaru dipasang menghilang.","\n","^_ _SEMUA RUANGAN_AreaA_ _","\n","^Raja menemukan lukisanBaru yang hilang.","\n","^yamg ternyata terletak ada di Resepsionis.","\n","^_ _","\n","^Raja kembali ke paintRoom dan memasang lukisanBaru ke tempat-nya.","\n","^Tiba-tiba ada Jumpscare -yaitu:","\n","^Semua lukisan berubah gambarnya menjadi gambar Hantu,","\n","^terdengar suara teriakan,","\n","^terdengar suara retakan di beberapa lukisan.","\n","^dan terlihat ada darah di lukisanBaru == lukisanSrikandi","\n",{"->":"AreaA"},{"#f":1}],"Ke_AreaB":[["^_ _AreaB _ _","\n","^Raja lanjut patrol melaksanakan TaskDaily di AreaB.","\n","ev","str","^Do_TaskDaily_AreaB","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Try_Enter_ArsipRoom","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"->":".^.^.Do_TaskDaily_AreaB"},"\n",{"->":".^.^.Do_TaskDaily_AreaB"},{"#f":5}],"c-1":["^ ",{"->":".^.^.Do_TaskDaily_AreaB.Try_Enter_ArsipRoom"},"\n",{"->":".^.^.Do_TaskDaily_AreaB"},{"#f":5}],"Do_TaskDaily_AreaB":["ev",0,"/ev",{"VAR=":"TaskSebelumArsip","re":true},"^Di AreaB Raja melaksanakan TaskDaily (1)(2)(3).","\n","^setelah selesai Raja bilang:","\n","^\"Alright selenjutnya ke ArsipRoom\" -Raja","\n",{"->":".^.Try_Enter_ArsipRoom"},[["ev",{"VAR?":"TaskSebelumArsip"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^Raja dalam hati bilang:","\n","^\"Aku harus melaksanakan TaskDaily bagian sini sebelum masuk ArsipRoom \"","\n",{"->":"Ke_AreaB"},{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.Check_ArsipRoom"},{"->":".^.^.^.2"},null]}],"nop","\n",["^_ _","\n","^Raja sekarang di ArsipRoom","\n","^dan melaksanakan TaskDaily (1)(2)(3).","\n","^Tiba-tiba terdengar suara kentong berbunyi dari gamelanRoom.","\n",["ev","str","^Continue... ","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Raja menemukan catatan tentang apa yang sebenarnya terjadi di museum ini.","\n","^(X) NoteCatatanTragedi - dibalik keangkeran yaitu:","\n","^\"(12 April 1990)","\n","^Aku menyadarinya, tempat ini berhantu, dan itulah juga alasan mengapa penjaga-penjaga sebelumnya tidak ada yang mau melanjutkan pekerjaan ini.","\n","^(23 April 1990)","\n","^Dingin menusuk tulang malam ini. Aku mendengar isak tangis dari ruang pameran. Ika, dalang Srikandi, berdiri mematung dengan wayang di tangannya. Mirip dengan cerita penjaga lama!\"","\n","^(Y)PetunjukBarangAneh - yaitu:","\n","^Aku menemukan beberapa barang aneh yang seharusnya tidak ada sebuah galeri. Kenapa ada peralatan ritual yang sangat terawat di Ruangan Rahasia ada dibalik lemari. Mereka seperti disiapkan untuk melakukan sesuatu.","\n","^Dari petunjuk tadi berdasarkan NoteCatatanTragedi dan PetunjukBarangAneh, Raja menuju tempat sesuai clue yang didapatkan.","\n","^Tiba-tiba ada Gamelan berbunyi keras dan sekilas berhenti.","\n","^\"GENJEEENG\" -SFX.","\n","^Suasana di museum semakin menakutkan.","\n","^Namun Raja tidak menghiraukan bunyi itu.","\n","^Bahkan Raja malah ingin tahu dan mengikuti PetunjukBarangAneh itu.","\n",{"->":"DepanLemari"},{"#f":5}]}],{"#f":5,"#n":"Check_ArsipRoom"}],{"#f":5,"#n":"Try_Enter_ArsipRoom"}],{"#f":5}]}],{"#f":1}],"DepanLemari":[["^_ _","\n","^Raja menemukan lemari berada di Kabi.","\n","^Raja kebingungan dilemari tidak ada apa-apa.","\n","ev","str","^FoundLemariClue","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^NotFoundLemariClue","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ Ternyata clue cara membuka rahasia dibalik lemari ini ditemukan berdasarkan kertas sobekan yang ada di lemari tersebut. ","\n","^Lalu raja membaca ClueLemari itu.","\n",{"->":"DoPuzzleLemari"},{"#f":5}],"c-1":[{"->":".^.^.^"},"\n",{"#f":5}]}],{"#f":1}],"DoPuzzleLemari":[["^Setelah Raja menemukan petunjuk apa yang dimaksud dari petunjuk Barang aneh di balik Lemari\"","\n","^Raja menekan buku sesuai urutan yang ada di ClueLemari","\n","ev","str","^Try_1234","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Try_2314","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^(benar)","\n",{"->":"OpenHiddenRoom"},{"#f":5}],"c-1":["^(Salah)","\n",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"OpenHiddenRoom":[["^_ _","\n","^Setelah Raja dapat berhasil menekan code yang benar maka Lemari itu bergeser dan membuka rahasia dibalik Lemari, yang membuka sebuah HiddenRoom.","\n","^Saat Raja masuk HiddenRoom ditemukan BarangAneh. Juga disana tergeletak ada NoteTutorialRitual.","\n","^Tiba-tiba hujan makin deras, dan suasana di museum makin seram, Listrik jadi padam.","\n","^Di HiddenRoom saat ini Sesajen Item ada:","\n",["^Lilin 2/4","\n",["^LilinTempat 4x","\n",["^Dupa","\n",["^Sesajen","\n",{"->":"FASE_3"},{"#f":5,"#n":"g-3"}],{"#f":5,"#n":"g-2"}],{"#f":5,"#n":"g-1"}],{"#f":5,"#n":"g-0"}],null],{"#f":1}],"FASE_3":[["^_ _ _ _ _ _","\n","^> Fase 3 <","\n","^!Saat ini dimana posisi Player menentukan apakah dia ingin membantu Hantu (IKA)!","\n","ev","str","^Raja_Berani","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Raja Takut","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^Raja melakukan pencarian perlengkapan bahan sesajen","\n",{"->":"Raja_Berani"},{"#f":5}],"c-1":["\n","^Raja decided lari","\n","^!Note: Alur ini diskip untuk meringatkan beban saat devUtama!","\n",{"->":"FASE_3"},{"#f":5}]}],{"#f":1}],"Raja_Berani":["^Raja  melakukan pencarian lilin, hanya perlu ","ev",{"VAR?":"jumlahLilin"},"out","/ev","^ lagi dari 4 yang diperlukan.","\n",["ev",{"VAR?":"jumlahLilin"},4,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"ItemRitualCompleted"},{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Raja_Berani.8.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Lilin1 ",{"->":"$r","var":true},null]}],["ev",{"^->":"Raja_Berani.8.b.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Lilin2",{"->":"$r","var":true},null]}],{"->":".^.^.^.9"},{"c-0":["ev",{"^->":"Raja_Berani.8.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"jumlahLilin"},1,"+","/ev",{"VAR=":"jumlahLilin","re":true},{"->":".^.^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"Raja_Berani.8.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"jumlahLilin"},1,"+","/ev",{"VAR=":"jumlahLilin","re":true},{"->":".^.^.^.^"},{"#f":5}]}]}],"nop","\n",{"#f":1}],"ItemRitualCompleted":[["^!ItemRitualCompleted!","\n","^!CutScene dimana ika sudah adab berada di Tempat Ritual dan terlihat geilisah/diam!","\n","^Lalu raja meencari barang yang berhubungan dengan ika didalam HiddenRoom.","\n","^Di HiddenRoom sudah ada  Busur yang item sakral yang bisa membunuh Hantu ini(IKA).","\n","^Raja mengambil Busur itu","\n","^!Busur masuk ke PlayerInventory!","\n","^Lalu busur ini untuk...","\n",["ev",{"^->":"ItemRitualCompleted.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^...di Berikan kepada Hantu",{"->":"$r","var":true},null]}],["ev",{"^->":"ItemRitualCompleted.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^...Membunuh Hantu.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ItemRitualCompleted.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n",{"->":"Ending1_Good"},{"#f":5}],"c-1":["ev",{"^->":"ItemRitualCompleted.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n",{"->":"Ending2_Bad"},{"#f":5}]}],{"#f":1}],"Ending1_Good":["^Ika menghilang dalam keadaan damai.","\n","^Raja memberikan busur ke Ika agar kembali tenang","\n","^Player memilih Ending 1!","\n","ev",1,"/ev",{"VAR=":"int_AchivementEnding1_Active","re":true},"^!int_AchivementEnding1_Active.SetInt!","\n",{"->":"EndingDisplay"},{"#f":1}],"Ending2_Bad":["^!Player memilih Ending 2!","\n","^Suasana museum semakin horror, semua tekstur menjadi warna merah darah.","\n","^Raja Panik dan takut.","\n","^Raja Lari keluar ke menuju Ke PintuUtama","\n","^Saat Raja ingin keluar dari pintu ada jumpscare","\n","ev",1,"/ev",{"VAR=":"int_AchivementEnding2_Active","re":true},"^!int_AchivementEnding2_Active.SetInt = 1!","\n",{"->":"EndingDisplay"},{"#f":1}],"EndingDisplay":["^!DisplayShowEnding!","\n",["ev",{"VAR?":"int_AchivementEnding1_Active"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^!ending1Image.SetActive();!","\n",{"->":".^.^.^.4"},null]}],["ev",{"VAR?":"int_AchivementEnding2_Active"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^!ending2Image.SetActive();!","\n",{"->":".^.^.^.4"},null]}],"nop","\n","done",{"#f":1}],"global decl":["ev",1,{"VAR=":"TaskSebelumArsip"},2,{"VAR=":"jumlahLilin"},false,{"VAR=":"int_AchivementEnding1_Active"},false,{"VAR=":"int_AchivementEnding2_Active"},"/ev","end",null],"#f":1}],"listDefs":{}};