import React, { useState } from 'react';
import {ChevronDown, ChevronUp } from 'lucide-react';
import siteContent from '../data/siteContent';

// Story Expander Component 
const StoryExpander = ({ story }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      {expanded ? (
        <>
          <div style={{ color: '#d1d5db', marginBottom: '16px' }}>
            {story.fullStory.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{ marginBottom: '16px' }}>{paragraph}</p>
            ))}
          </div>
          <button 
            onClick={() => setExpanded(false)} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: '#eab308', 
              fontWeight: '500', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            Show Less <ChevronUp size={18} style={{ marginLeft: '4px' }} />
          </button>
        </>
      ) : (
        <button 
          onClick={() => setExpanded(true)} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#eab308', 
            fontWeight: '500', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer' 
          }}
        >
          Read More <ChevronDown size={18} style={{ marginLeft: '4px' }} />
        </button>
      )}
    </>
  );
};

const ExpatTravellerWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const handleButtonAction = (button) => {
    if (button.action === 'scroll') {
      scrollToSection(button.target);
    } else if (button.action === 'link') {
      window.open(button.target, '_blank');
    }
  };

  const getButtonStyle = (type) => {
    const baseStyle = {
      padding: '12px 24px', 
      borderRadius: '9999px', 
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    };
    
    switch(type) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: '#eab308',
          color: '#1f2937',
          border: 'none'
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: 'white',
          border: '2px solid white'
        };
      case 'outlined':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: '#eab308',
          border: '2px solid #eab308'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: '#1f2937',
          color: 'white',
          border: 'none'
        };
    }
  };

  return (
    <div style={{ backgroundColor: '#111827', color: 'white', fontFamily: 'sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        zIndex: 50 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '16px 20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#eab308', 
              borderRadius: '9999px', 
              overflow: 'hidden' 
            }}>
              <img 
                src={siteContent.navigation.logo.path} 
                alt={siteContent.navigation.logo.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h1 style={{ marginLeft: '12px', fontSize: '20px', fontWeight: 'bold' }}>{siteContent.meta.title}</h1>
          </div>
          
          <div style={{ display: 'flex', gap: '24px' }}>
            {siteContent.navigation.links.map(item => (
              <button
                key={item.id}
                style={{ 
                  padding: '12px', 
                  backgroundColor: 'transparent', 
                  border: 'none', 
                  color: activeSection === item.id ? '#eab308' : 'white', 
                  cursor: 'pointer' 
                }}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
{/* Hero Section */}
<section 
  id="home" 
  style={{
    position: 'relative',
    minHeight: '80vh',
    paddingTop: '10px',
    backgroundImage: `url(${siteContent.hero.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }}></div>
  
  <div style={{
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 16px'
  }}>
    {/* Logo */}
    <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
      <img 
        src={siteContent.hero.logo} 
        alt={siteContent.navigation.logo.alt} 
        style={{ 
          width: '128px', 
          height: '128px', 
          borderRadius: '9999px', 
          border: '4px solid #eab308'
        }}
      />
    </div>
    
    <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#fff' }}>
      {siteContent.hero.title}
    </h1>
    <p style={{ fontSize: '20px', marginBottom: '12px', maxWidth: '42rem', margin: '0 auto 32px', color: '#ddd' }}>
      {siteContent.hero.maintitle}
    </p>
    <p style={{ fontSize: '16px', marginBottom: '20px', maxWidth: '42rem', margin: '0 auto 32px', color: '#bbb' }}>
      {siteContent.hero.subtitle}
    </p>
    
    {/* Social Media Buttons with White Icons */}
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      flexWrap: 'wrap', 
      gap: '16px',
      marginTop: '20px'
    }}>
      {siteContent.hero.social.map((platform, index) => (
        <a 
          key={index}
          href={platform.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            borderRadius: '50px',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: platform.color, // Platform-specific button color
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
          }}
        >
          <img 
            src={platform.iconPath}  // Full-color icons
            alt={platform.platform} 
            style={{ 
              width: '24px', 
              height: '24px', 
              marginRight: '10px', 
              filter: 'brightness(0) invert(1)' // Converts icon to white
            }} 
          />
          <span>{platform.username}</span>
        </a>
      ))}
    </div>
  </div>
</section>



      {/* Photos Section */}
      <section 
        id="photos" 
        style={{
          minHeight: '100vh',
          padding: '80px 20px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${siteContent.photos.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              {siteContent.photos.title}
            </h2>
            <p style={{ color: '#d1d5db', maxWidth: '42rem', margin: '0 auto' }}>
              {siteContent.photos.subtitle}
            </p>
          </div>
          
          {/* Masonry Layout Photo Grid */}
          <div style={{
            columnCount: 2,
            columnGap: '24px'
          }}>
            {siteContent.photos.gallery.map((photo, index) => (
              <div 
                key={index} 
                style={{
                  marginBottom: '24px',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  position: 'relative',
                  breakInside: 'avoid'
                }}
              >
                <img 
                  src={photo.path}
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '24px',
                    opacity: 0,
                    transition: 'opacity 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                  onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                >
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                      {photo.location}
                    </h3>
                    <p style={{ color: '#d1d5db' }}>
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            {siteContent.photos.buttons.map((button, index) => (
              <button 
                key={index}
                onClick={() => handleButtonAction(button)}
                style={getButtonStyle(button.type)}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section 
        id="stories" 
        style={{
          minHeight: '100vh',
          padding: '80px 20px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${siteContent.stories.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>
              {siteContent.stories.title}
            </h2>
            <p style={{ color: '#d1d5db', maxWidth: '42rem', margin: '0 auto' }}>
              {siteContent.stories.subtitle}
            </p>
          </div>
          
          {/* Alternating Stories Layout with Row Format */}
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {siteContent.stories.articles.map((story, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row',
                  '@media (max-width: 768px)': {
                    flexDirection: 'column'
                  }
                }}>
                  {/* Image Side */}
                  <div style={{
                    width: '25%',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    '@media (max-width: 768px)': {
                      width: '100%'
                    }
                  }}>
                    <img
                      src={story.image}
                      alt={story.alt}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div style={{
                    width: '75%',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '@media (max-width: 768px)': {
                      width: '100%'
                    }
                  }}>
                    <div>
                      <span style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: '#eab308',
                        color: '#1f2937',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        borderRadius: '9999px',
                        marginBottom: '12px'
                      }}>
                        {story.category}
                      </span>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
                        {story.title}
                      </h3>
                      <p style={{ color: '#d1d5db', marginBottom: '16px' }}>
                        {story.excerpt}
                      </p>
                      <StoryExpander story={story} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* About Section */}
<section 
  id="about" 
  style={{
    minHeight: '80vh',
    padding: '20px 10px',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${siteContent.about.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    {/* Title and Subtitle */}
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#fff' }}>
        {siteContent.about.title}
      </h2>
      <p style={{ color: '#d1d5db', maxWidth: '42rem', margin: '0 auto' }}>
        {siteContent.about.subtitle}
      </p>
    </div>
    
    {/* Profile Section */}
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderRadius: '16px',
      overflow: 'hidden',
      maxWidth: '1024px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        '@media (min-width: 768px)': { flexDirection: 'row' },
      }}>
        {/* Profile Image */}
        <div style={{
          width: '100%',
          maxWidth: '250px',
          marginBottom: '16px',
          '@media (min-width: 768px)': { width: '25%' },
        }}>
          <img
            src={siteContent.about.profile.image}
            alt={siteContent.about.profile.name}
            style={{
              width: '100%',
              borderRadius: '8px',
              objectFit: 'cover',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />
        </div>
        
        {/* Profile Info */}
        <div style={{
          width: '100%',
          maxWidth: '750px',
          padding: '20px',
          '@media (min-width: 768px)': { width: '75%' },
        }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: '#fff' }}>
            Hello, I'm {siteContent.about.profile.name}
          </h3>
          
          {/* Bio */}
          {siteContent.about.profile.bio.map((paragraph, index) => (
            <p key={index} style={{ color: '#d1d5db', marginBottom: '16px' }}>
              {paragraph}
            </p>
          ))}
          
          {/* Social Media Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '24px',
          }}>
            {siteContent.about.profile.social.map((platform, index) => (
              <a 
                key={index}
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  backgroundColor: platform.color,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img 
                  src={platform.iconPath} 
                  alt={platform.platform} 
                  style={{ 
                    width: '20px', 
                    height: '20px', 
                    marginRight: '8px',
                    filter: 'brightness(0) invert(1)', // White icons
                  }} 
                />
                <span>{platform.username}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer style={{ backgroundColor: 'black', padding: '40px 0', color: '#9ca3af' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px' }}>{siteContent.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default ExpatTravellerWebsite;