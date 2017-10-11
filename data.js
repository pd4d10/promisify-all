module.exports = [
  {
    namespace: 'child_process',
    methods: ['exec', 'execFile'],
  },
  {
    namespace: 'dns',
    methods: [
      'lookup',
      'lookupService',
      'resolve',
      'resolve4',
      'resolve6',
      'resolveCname',
      'resolveMx',
      'resolveNaptr',
      'resolveNs',
      'resolvePtr',
      'resolveSoa',
      'resolveSrv',
      'resolveTxt',
      'resolveAny',
      'reverse',
    ],
  },
  {
    namespace: 'fs',
    methods: [
      'access',
      'appendFile',
      'chmod',
      'chown',
      'close',
      'copyFile',
      'fchmod',
      'fchown',
      'fdatasync',
      'fstat',
      'fsync',
      'ftruncate',
      'futimes',
      'lchmod',
      'lchown',
      'link',
      'lstat',
      'mkdir',
      'mkdtemp',
      'open',
      'read',
      'readdir',
      'readFile',
      'readlink',
      'realpath',
      'rename',
      'rmdir',
      'stat',
      'symlink',
      'truncate',
      'unlink',
      'utimes',
      'write',
      'writeFile',
    ],
  },
]
