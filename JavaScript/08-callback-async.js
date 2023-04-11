// for (var i = 0; i < 2; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }


// ^
// |
// |
// |for { [st][st] } for { [st][st][st] }              [=>][=>][=>][=>][=>][=>]
// +------------------------------------------------------------------------------->

setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E')

// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C
// 4 - E B D A C
// 5 - B E D A C

// ^
// |
// |                               [log]                      [log][log]                     [log]
// |[st][st][st][st][log] ⟳        [=>] ⟳                     [=>][=>]   ⟳                   [=>]
// +----0---1---2---3---------------8ms-----------------------500ms--------------------------1000ms-->
//                  E              B                           A   D                          C

// file d'attente (0ms) : taskB
// file d'attente (8ms) :
// file d'attente (500ms) : taskA - taskD
// file d'attente (501ms) : taskD
// file d'attente (502ms) :
// file d'attente (1000ms) : taskC
// file d'attente (1001ms) :

// Youtube
// Jake Archibald (Service Worker, idb)
// Conférence : JSConf.Asia 2018 - In The Loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
