
import type { PlaylistData } from './types';

export const INITIAL_SONGS_TEXT = [
  '01. Yêu 5',
  '02. Nến Và Hoa',
  '03. Túy Âm',
  '04. Bên Trên Tầng Lầu',
  '05. Một Nhà',
  '06. 3107 2',
  '07. Khó Vẽ Nụ Cười',
  '08. Yêu Được Không',
  '09. Cause I Love You',
  '10. Em Đã Biết',
  '11. 2 Phút Hơn (Masew Remix)',
  '12. Anh Nhà Ở Đâu Thế (Masew Remix)',
  '13. Điều Khác Lạ (Masew Remix)',
  '14. Hồng Nhan (Masew Remix)',
  '15. Bạc Phận (Masew Remix)',
  '16. Những Lo Âu Ấy',
  '17. Về',
  '18. Lững Lờ',
  '19. Về Với Em',
  '20. Trò Chơi',
].join('\n');


export const INITIAL_DATA: PlaylistData = {
  backgroundImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2187&auto=format&fit=crop',
  logoImage: 'https://i.imgur.com/8z2e21Z.png',
  subtitle: 'NHỮNG BẢN HITS CỰC SUY HAY NHẤT',
  title: 'YÊU 5, TÚY ÂM...',
  songs: INITIAL_SONGS_TEXT.split('\n').map((title, index) => ({ id: index + 1, title: title.trim() })),
};
