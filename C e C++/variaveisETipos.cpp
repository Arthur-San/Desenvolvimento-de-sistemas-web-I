#include <lostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> msg {"Hello", "C++", "World", "from", "VS Code"};

    for (const string& word : msg)
    {
        cout << word << " ";
    }
    cout << end1;
    return 0;
}