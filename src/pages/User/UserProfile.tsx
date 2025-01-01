const UserProfile = () => {
  return (
    <section className="bg-[#fafafa] ">
      <div className="lg:max-w-7xl mx-auto font-Outfit bg-white rounded-lg p-6 myShadow">
        <h3 className="text-xl font-bold">User Profile</h3>
        <p className="text-gray-500">Welcome to your profile page</p>
        <hr className="my-2" />

        <div>
          <label>Name</label>
          <p className="text-xl font-medium">John Doe</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
