<template>
  <div class="about-view">
    <!-- Герой-секция -->
    <div class="about-hero">
      <div class="hero-content">
        <div class="hero-ornament top"></div>
        <h1 class="hero-title">О РЕСТОРАНЕ CHINCH</h1>
        <p class="hero-subtitle">История, философия и команда</p>
        <div class="hero-ornament bottom"></div>
      </div>
    </div>

    <!-- История ресторана -->
    <div class="story-section">
      <div class="container">
        <div class="story-content">
          <div class="story-text">
            <h2 class="section-title">НАША ИСТОРИЯ</h2>
            <div class="section-divider"></div>
            <div class="story-paragraphs">
              <p class="story-paragraph">
                Ресторан CHINCH был основан в 2023 году с целью создания места, 
                где изысканная кухня встречается с непревзойденной атмосферой. 
                Название "CHINCH" символизирует сочетание шика (chic) и элегантности.
              </p>
              <p class="story-paragraph">
                Мы начали с маленького пространства в центре Москвы, но с большими 
                амбициями. Наша философия проста: использовать только лучшие 
                ингредиенты, создавать уникальные блюда и обеспечивать безупречный 
                сервис для каждого гостя.
              </p>
              <p class="story-paragraph">
                Сегодня CHINCH — это не просто ресторан, а место встреч для ценителей 
                качественной кухни, деловых встреч и особых праздников. Мы продолжаем 
                развиваться, сохраняя при этом нашу основную ценность — внимание 
                к деталям.
              </p>
            </div>
          </div>
          <div class="story-image">
            <div class="image-frame">
              <div class="image-overlay"></div>
              <div class="image-text">2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Философия -->
    <div class="philosophy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">НАША ФИЛОСОФИЯ</h2>
          <p class="section-subtitle">Три принципа, которые нас определяют</p>
        </div>
        
        <div class="philosophy-cards">
          <div class="philosophy-card">
            <div class="card-number">01</div>
            <h3 class="card-title">КАЧЕСТВО</h3>
            <p class="card-description">
              Мы тщательно отбираем каждого поставщика, каждый продукт. 
              От фермерских овощей до премиального мяса — все проходит 
              строгий контроль качества.
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-number">02</div>
            <h3 class="card-title">ИННОВАЦИИ</h3>
            <p class="card-description">
              Наш шеф-повар постоянно экспериментирует, создавая новые 
              сочетания вкусов. Традиционные техники встречаются с 
              современными подходами.
            </p>
          </div>
          
          <div class="philosophy-card">
            <div class="card-number">03</div>
            <h3 class="card-title">ГОСТЕПРИИМСТВО</h3>
            <p class="card-description">
              Каждый гость для нас — особенный. Мы создаем атмосферу, 
              где вы чувствуете себя как дома, но с уровнем сервиса 
              лучших мировых ресторанов.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Команда -->
    <div class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">НАША КОМАНДА</h2>
          <p class="section-subtitle">Профессионалы, создающие магию</p>
        </div>
        
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <div class="photo-placeholder">👨‍🍳</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Александр Волков</h3>
              <div class="member-position">ШЕФ-ПОВАР</div>
              <p class="member-bio">
                15 лет опыта в лучших ресторанах Европы. 
                Специализируется на авторской кухне и современных техниках.
              </p>
            </div>
          </div>
          
          <div class="team-member">
            <div class="member-photo">
              <div class="photo-placeholder">🍸</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Мария Соколова</h3>
              <div class="member-position">ШЕФ-БАРМЕН</div>
              <p class="member-bio">
                Автор уникальных коктейлей. Победитель международных 
                барменских конкурсов. Знает все о сочетаниях вкусов.
              </p>
            </div>
          </div>
          
          <div class="team-member">
            <div class="member-photo">
              <div class="photo-placeholder">🎩</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Дмитрий Орлов</h3>
              <div class="member-position">УПРАВЛЯЮЩИЙ</div>
              <p class="member-bio">
                Обеспечивает безупречный сервис. 10 лет в ресторанном 
                бизнесе. Знает, как сделать каждый визит незабываемым.
              </p>
            </div>
          </div>
          
          <div class="team-member">
            <div class="member-photo">
              <div class="photo-placeholder">🍷</div>
            </div>
            <div class="member-info">
              <h3 class="member-name">Елена Кузнецова</h3>
              <div class="member-position">СОМЕЛЬЕ</div>
              <p class="member-bio">
                Сертифицированный сомелье. Подберет идеальное вино 
                к любому блюду. Регулярно посещает винодельни Европы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Контактная информация -->
    <div class="contact-section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-info">
            <h2 class="contact-title">СВЯЖИТЕСЬ С НАМИ</h2>
            <div class="contact-divider"></div>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <div class="contact-label">АДРЕС</div>
                  <div class="contact-value">ул. Берзарина, 28А, корп. 4, Москва</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <div class="contact-label">КОНТАКТЫ</div>
                  <div class="contact-value">+7 (915) 054-96-06</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div class="contact-text">
                  <div class="contact-label">EMAIL</div>
                  <div class="contact-value">info@chinch.ru</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div class="contact-text">
                  <div class="contact-label">ВРЕМЯ РАБОТЫ</div>
                  <div class="contact-value">
                    <div>Пн-Вс: 08:00 - 23:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="visit-cta">
            <h3 class="cta-title">ПОСЕТИТЕ НАС</h3>
            <p class="cta-text">
              Приходите и убедитесь сами в качестве нашей кухни 
              и атмосфере ресторана. Бронируйте столик заранее, 
              чтобы гарантировано получить лучшие места.
            </p>
            <router-link to="/reservation" class="cta-button">
              <span class="button-text">ЗАБРОНИРОВАТЬ СТОЛИК</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about-view {
  min-height: calc(100vh - 400px);
}

/* Герой-секция */
.about-hero {
  background: linear-gradient(135deg, rgba(139, 107, 77, 0.9) 0%, rgba(176, 141, 87, 0.9) 100%);
  padding: 6rem 2rem;
  text-align: center;
  color: #f8f4ea;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-ornament {
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4b483, transparent);
  margin: 0 auto;
  width: 200px;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin: 2rem 0 1rem;
  text-transform: uppercase;
}

.hero-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #d4b483;
  font-style: italic;
  letter-spacing: 0.1em;
  margin: 0.5rem 0 2rem;
}

/* Общие стили */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.section-divider {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  margin-bottom: 2rem;
}

/* История */
.story-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f4ea 0%, #f1e9d7 100%);
}

.story-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 992px) {
  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.story-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.story-paragraph {
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  color: #2a1e14;
  line-height: 1.8;
  letter-spacing: 0.03em;
}

.story-image {
  position: relative;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #e8d4b0 0%, #d4b483 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(42, 30, 20, 0.1), rgba(58, 42, 28, 0.1));
}

.image-text {
  font-family: 'Playfair Display', serif;
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
  z-index: 1;
}

/* Философия */
.philosophy-section {
  padding: 5rem 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #8b6b4d;
  font-style: italic;
  letter-spacing: 0.05em;
}

.philosophy-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 992px) {
  .philosophy-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .philosophy-cards {
    grid-template-columns: 1fr;
  }
}

.philosophy-card {
  background: linear-gradient(135deg, #fffbf0 0%, #f8f0e0 100%);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  border: 1px solid #e8dcc9;
  transition: all 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(139, 107, 77, 0.15);
  border-color: #b08d57;
}

.card-number {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: rgba(176, 141, 87, 0.2);
  font-weight: 600;
  margin-bottom: 1rem;
}

.card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.card-description {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #5d4a30;
  line-height: 1.6;
}

/* Команда */
.team-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f4ea 0%, #f1e9d7 100%);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
}

.team-member {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e8dcc9;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(139, 107, 77, 0.15);
}

.member-photo {
  height: 180px;
  background: linear-gradient(135deg, #e8d4b0 0%, #d4b483 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-placeholder {
  font-size: 4rem;
  opacity: 0.8;
}

.member-info {
  padding: 1.5rem;
}

.member-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #2a1e14;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.member-position {
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  color: #b08d57;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e8dcc9;
}

.member-bio {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: #5d4a30;
  line-height: 1.5;
}

/* Контакты */
.contact-section {
  padding: 5rem 0;
  background: white;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

@media (max-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.contact-divider {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  margin-bottom: 2.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  color: #b08d57;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.contact-text {
  flex: 1;
}

.contact-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem;
  color: #8b6b4d;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.contact-value {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #2a1e14;
  line-height: 1.5;
}

.visit-cta {
  background: linear-gradient(135deg, #fffbf0 0%, #f8f0e0 100%);
  border-radius: 12px;
  padding: 2.5rem;
  border: 1px solid #e8dcc9;
}

.cta-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.cta-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #5d4a30;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  text-align: center;
  border: none;
  cursor: pointer;
  width: 100%;
}

.cta-button:hover {
  background: linear-gradient(135deg, #3a2a1c, #2a1e14);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(42, 30, 20, 0.2);
}

.button-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .about-hero {
    padding: 4rem 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .story-section,
  .philosophy-section,
  .team-section,
  .contact-section {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>
