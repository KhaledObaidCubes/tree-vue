const TreeSchematic = [
  {
    caption: 'a00',
    nodes:[
      { caption: 'b' },
      { caption: 'b' },
      {
        caption: 'b00father',
        nodes:[
          { caption: 'b' },
          { caption: 'b' },
          {
            caption: 'b00family',
            nodes:[
              { caption: 'b' },
              { caption: 'b' },
              { caption: 'b' },
              { caption: 'g' },
            ],
          },
        ],
      },
    ],
  },
  { caption: 'bff' },
  { caption: 'aff' },
  { caption: 'bff' },
]

export { TreeSchematic }
