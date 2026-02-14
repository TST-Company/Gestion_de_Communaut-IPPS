/**
 * 🔧 SIMULATION UTILISATEURS - MODE DÉVELOPPEMENT
 * 
 * Ce fichier contient les numéros de test pour simuler différents rôles.
 * Modifiez cette liste pour ajouter/supprimer des utilisateurs de test.
 */

export interface SimulatedUser {
  phone: string           // Numéro avec +221
  role: string            // Rôle dans la base de données
  firstName: string       // Prénom pour affichage
  lastName: string        // Nom pour affichage
  dashboard: string       // Route du dashboard
}

/**
 * 📋 LISTE DES UTILISATEURS DE TEST
 * 
 * Ajoutez autant d'utilisateurs que vous voulez ici.
 * Le système comparera le numéro saisi avec cette liste.
 */
export const SIMULATED_USERS: SimulatedUser[] = [
  // ========================================
  // 👑 SUPER ADMIN
  // ========================================
  {
    phone: '+221771234569',
    role: 'super_admin',
    firstName: 'Admin',
    lastName: 'Principal',
    dashboard: '/(admin)/dashboard'
  },
  {
    phone: '+221770000001',
    role: 'super_admin',
    firstName: 'Moussa',
    lastName: 'Diop',
    dashboard: '/(admin)/dashboard'
  },

  // ========================================
  // 👔 GESTIONNAIRE DE CONTENU
  // ========================================
  {
    phone: '+221771234568',
    role: 'gestionnaire_contenu',
    firstName: 'Fatou',
    lastName: 'Sall',
    dashboard: '/(admin)/dashboard'  // Temporaire, changera quand le dashboard sera créé
  },
  {
    phone: '+221770000002',
    role: 'gestionnaire_contenu',
    firstName: 'Amadou',
    lastName: 'Ba',
    dashboard: '/(admin)/dashboard'
  },

  // ========================================
  // 👤 LECTEUR (Utilisateur normal)
  // ========================================
  {
    phone: '+221771234567',
    role: 'lecteur',
    firstName: 'Awa',
    lastName: 'Ndiaye',
    dashboard: '/(admin)/dashboard'  // Temporaire, changera quand le dashboard sera créé
  },
  {
    phone: '+221770000003',
    role: 'lecteur',
    firstName: 'Cheikh',
    lastName: 'Fall',
    dashboard: '/(admin)/dashboard'
  },
  {
    phone: '+221770000004',
    role: 'lecteur',
    firstName: 'Marie',
    lastName: 'Sarr',
    dashboard: '/(admin)/dashboard'
  },
]

/**
 * 🔍 Trouver un utilisateur par son numéro de téléphone
 */
export function findUserByPhone(phone: string): SimulatedUser | null {
  console.log('🔍 Recherche utilisateur pour:', phone)
  
  const user = SIMULATED_USERS.find(u => u.phone === phone)
  
  if (user) {
    console.log('✅ Utilisateur trouvé:', user.firstName, user.lastName, `(${user.role})`)
    return user
  }
  
  console.log('❌ Utilisateur non trouvé')
  return null
}

/**
 * ✅ Vérifier si un numéro existe dans le système
 */
export function userExists(phone: string): boolean {
  return findUserByPhone(phone) !== null
}

/**
 * 📊 Obtenir le rôle d'un utilisateur
 */
export function getUserRole(phone: string): string | null {
  const user = findUserByPhone(phone)
  return user ? user.role : null
}

/**
 * 🏠 Obtenir le dashboard d'un utilisateur
 */
export function getUserDashboard(phone: string): string | null {
  const user = findUserByPhone(phone)
  return user ? user.dashboard : null
}

/**
 * 👤 Obtenir le nom complet d'un utilisateur
 */
export function getUserFullName(phone: string): string | null {
  const user = findUserByPhone(phone)
  return user ? `${user.firstName} ${user.lastName}` : null
}

/**
 * 📱 Formater un numéro pour l'affichage
 */
export function formatPhoneDisplay(phone: string): string {
  // +221771234567 → +221 77 123 45 67
  if (phone.startsWith('+221')) {
    const number = phone.substring(4)
    return `+221 ${number.substring(0, 2)} ${number.substring(2, 5)} ${number.substring(5, 7)} ${number.substring(7)}`
  }
  return phone
}