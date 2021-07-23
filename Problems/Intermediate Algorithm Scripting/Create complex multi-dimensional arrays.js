let myNestedArray = [
  // Only change code below this line

  // 2 levels deep
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],

  // 3 levels deep
  [
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ["deep"]
  ],

  // 4 levels deep
  [
    [
      ['concat', false, true, 'spread', 'array'],
      ["deeper"]
    ]
  ],

  // 5 levels deep  
  [
    [
      [
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
        ["deepest"]
      ]
    ]
  ]
];
//Example Problem
// let nestedArray = [
//0     ['deep'],


//1     [
//       ['deeper0'], ['deeper1']
//     ],


//2     [
//   2-0    [
//    2-0-0          ['deepest'],    2-0-1 ['deepest']
//          ],

//   2-1    [
//    2-1-0       [
//     2-1-0-0              ['deepest-est?']
//                ]
//         ]
//     ]


//   ];
//   console.table(nestedArray[2][1][0][0][0]);

// nestedArray[0][0] == 'deep'

// nestedArray[1][0]== 'deeper0'
// nestedArray[1][1] == 'deeper1'

// nestedArray[2][0]




//  myArray (level 1) [
//     "random string",               //myArray[0]

//     ['level two item here', 'another level two item'],     //myArray[1][0] ===level two item here

//     [ 
//       "level two",
//       ['level three ', 'dyude'], ['still level three'],   //myArray[2][1][0][1]  ===   
//       "level two"
//     ]
//   ]